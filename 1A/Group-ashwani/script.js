document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.testimonial-carousel');
    let isHovered = false;

    // Pause animation on hover
    carousel.addEventListener('mouseenter', () => {
        isHovered = true;
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        isHovered = false;
        carousel.style.animationPlayState = 'running';
    });
});

function scrollToForm() {
    const formSection = document.getElementById('categories');
    formSection.scrollIntoView({ behavior: 'smooth' });
  }

// for send notification messege to shop owner


// Functionality for Notification Section
document.getElementById('notificationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get input values
    const userName = document.getElementById('userName').value.trim();
    const userQuery = document.getElementById('userQuery').value.trim();

    // Validate inputs
    if (!userName || !userQuery) {
        alert('Please fill out both fields before sending the notification.');
        return;
    }

    // Display success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    successMessage.textContent = `Notification sent successfully by ${userName}!`;

    // Clear the form inputs
    document.getElementById('userName').value = '';
    document.getElementById('userQuery').value = '';

    // Hide the success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});

// Functionality for Reviews & Ratings Section
document.getElementById('submitReview').addEventListener('click', function () {
    // Get input values
    const userName = document.getElementById('userName').value.trim();
    const userReview = document.getElementById('userReview').value.trim();
    const userRating = document.getElementById('userRating').value;

    // Validate inputs
    // if (!userName || !userReview || !userRating) {
    //     alert('Please fill out all fields before submitting your review.');
    //     return;
    // }



    // Create a new review element dynamically
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';
    reviewElement.innerHTML = `
        <p> <strong> ${userName}:</strong> ${userReview}</p>
        <span class="rating">Rating: ${'⭐'.repeat(Number(userRating))}</span>
    `;

    // Append the new review above the form
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.appendChild(reviewElement);

    // Scroll to the newly added review
    reviewElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Clear the form inputs
    document.getElementById('userName').value = '';
    document.getElementById('userReview').value = '';
    document.getElementById('userRating').value = '5'; // Reset to default rating
});



