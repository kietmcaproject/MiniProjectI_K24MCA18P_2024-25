<?php
// config.php - Database configuration
$DB_SERVER= "localhost";
$DB_USERNAME ="root";
$DB_PASSWORD = "";
$DB_NAME = "incident_management";

// Create connection
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS ".DB_NAME;
if ($conn->query($sql) === FALSE) {
    die("Error creating database: " . $conn->error);
}
// Select database
$conn->select_db(DB_NAME);

// Create tables
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === FALSE) {
    die("Error creating users table: " . $conn->error);
}

$sql = "CREATE TABLE IF NOT EXISTS incidents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    priority ENUM('low', 'medium', 'high') NOT NULL,
    incident_type VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    status ENUM('open', 'in_progress', 'resolved', 'closed') DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
)";

if ($conn->query($sql) === FALSE) {
    die("Error creating incidents table: " . $conn->error);
}

$sql = "CREATE TABLE IF NOT EXISTS incident_updates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    incident_id INT,
    user_id INT,
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (incident_id) REFERENCES incidents(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
)";

if ($conn->query($sql) === FALSE) {
    die("Error creating incident_updates table: " . $conn->error);
}

// incident_handler.php - Handle incident submissions and updates
class IncidentHandler {
    private $conn;
    
    public function __construct($connection) {
        $this->conn = $connection;
    }
    
    public function createIncident($userId, $data) {
        $stmt = $this->conn->prepare("
            INSERT INTO incidents (user_id, priority, incident_type, location, description)
            VALUES (?, ?, ?, ?, ?)
        ");
        
        $stmt->bind_param("issss", 
            $userId,
            $data['priority'],
            $data['incident_type'],
            $data['location'],
            $data['description']
        );
        
        if ($stmt->execute()) {
            return ["success" => true, "incident_id" => $this->conn->insert_id];
        } else {
            return ["success" => false, "error" => $stmt->error];
        }
    }
    
    public function updateIncidentStatus($incidentId, $status) {
        $stmt = $this->conn->prepare("
            UPDATE incidents 
            SET status = ?
            WHERE id = ?
        ");
        
        $stmt->bind_param("si", $status, $incidentId);
        
        return $stmt->execute();
    }
    
    public function addUpdate($incidentId, $userId, $comment) {
        $stmt = $this->conn->prepare("
            INSERT INTO incident_updates (incident_id, user_id, comment)
            VALUES (?, ?, ?)
        ");
        
        $stmt->bind_param("iis", $incidentId, $userId, $comment);
        
        return $stmt->execute();
    }
    
    public function getIncidentDetails($incidentId) {
        $sql = "
            SELECT i.*, u.username, 
                   GROUP_CONCAT(
                       CONCAT(iu.created_at, ': ', iu.comment)
                       ORDER BY iu.created_at
                       SEPARATOR '|'
                   ) as updates
            FROM incidents i
            LEFT JOIN users u ON i.user_id = u.id
            LEFT JOIN incident_updates iu ON i.id = iu.incident_id
            WHERE i.id = ?
            GROUP BY i.id
        ";
        
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $incidentId);
        $stmt->execute();
        
        return $stmt->get_result()->fetch_assoc();
    }
    
    public function getIncidentsList($filters = []) {
        $sql = "SELECT i.*, u.username
                FROM incidents i
                LEFT JOIN users u ON i.user_id = u.id
                WHERE 1=1";
        
        if (!empty($filters['status'])) {
            $sql .= " AND i.status = '".$this->conn->real_escape_string($filters['status'])."'";
        }
        if (!empty($filters['priority'])) {
            $sql .= " AND i.priority = '".$this->conn->real_escape_string($filters['priority'])."'";
        }
        
        $sql .= " ORDER BY i.created_at DESC";
        
        $result = $this->conn->query($sql);
        $incidents = [];
        
        while ($row = $result->fetch_assoc()) {
            $incidents[] = $row;
        }
        
        return $incidents;
    }
}

// Example usage:
// process_incident.php - Handle form submission
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once 'config.php';
    
    $handler = new IncidentHandler($conn);
    
    // Validate and sanitize input
    $data = [
        'priority' => filter_input(INPUT_POST, 'priority', FILTER_SANITIZE_STRING),
        'incident_type' => filter_input(INPUT_POST, 'incident_type', FILTER_SANITIZE_STRING),
        'location' => filter_input(INPUT_POST, 'location', FILTER_SANITIZE_STRING),
        'description' => filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING)
    ];
    
    // Assuming user is logged in and we have their ID
    $userId = $_SESSION['user_id'] ?? 1; // Replace with actual user authentication
    
    $result = $handler->createIncident($userId, $data);
    
    header('Content-Type: application/json');
    echo json_encode($result);
    exit;
}
?>
