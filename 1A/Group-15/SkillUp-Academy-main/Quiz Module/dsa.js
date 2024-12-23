// DSA QUESTIONS 30
const questions = [
    {
        question: "Which data structure follows the FIFO principle?",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Linked List", correct: false },
            { text: "Tree", correct: false }
        ]
    },
    {
        question: "What is the time complexity of binary search on a sorted array?",
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: true },
            { text: "O(n^2)", correct: false },
            { text: "O(1)", correct: false }
        ]
    },
    {
        question: "Which data structure is used in Depth First Search (DFS) of a graph?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Heap", correct: false },
            { text: "Hash Table", correct: false }
        ]
    },
    {
        question: "What is the best case time complexity of Bubble Sort?",
        answers: [
            { text: "O(n^2)", correct: false },
            { text: "O(n log n)", correct: false },
            { text: "O(n)", correct: true },
            { text: "O(log n)", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a linear data structure?",
        answers: [
            { text: "Array", correct: false },
            { text: "Linked List", correct: false },
            { text: "Binary Tree", correct: true },
            { text: "Stack", correct: false }
        ]
    },
    {
        question: "What does LIFO stand for in data structures?",
        answers: [
            { text: "Last In First Out", correct: true },
            { text: "Last In Fixed Out", correct: false },
            { text: "Last Input First Output", correct: false },
            { text: "Least Input First Output", correct: false }
        ]
    },
    {
        question: "What is the time complexity of inserting an element at the end of a linked list?",
        answers: [
            { text: "O(1)", correct: true },
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: false },
            { text: "O(n^2)", correct: false }
        ]
    },
    {
        question: "In a binary search tree, which traversal gives the nodes in non-decreasing order?",
        answers: [
            { text: "Preorder", correct: false },
            { text: "Postorder", correct: false },
            { text: "Inorder", correct: true },
            { text: "Level Order", correct: false }
        ]
    },
    {
        question: "What is the auxiliary space complexity of Merge Sort?",
        answers: [
            { text: "O(1)", correct: false },
            { text: "O(log n)", correct: false },
            { text: "O(n)", correct: true },
            { text: "O(n^2)", correct: false }
        ]
    },
    {
        question: "Which data structure is commonly used for implementing recursion?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Heap", correct: false },
            { text: "Tree", correct: false }
        ]
    },
    {
        question: "What is a heap data structure mainly used for?",
        answers: [
            { text: "Sorting", correct: true },
            { text: "Searching", correct: false },
            { text: "Traversal", correct: false },
            { text: "Storage", correct: false }
        ]
    },
    {
        question: "Which traversal method is used in Breadth First Search (BFS)?",
        answers: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Heap", correct: false },
            { text: "Graph", correct: false }
        ]
    },
    {
        question: "Which of the following sorting algorithms has the best average case performance?",
        answers: [
            { text: "Bubble Sort", correct: false },
            { text: "Insertion Sort", correct: false },
            { text: "Merge Sort", correct: true },
            { text: "Selection Sort", correct: false }
        ]
    },
    {
        question: "Which of the following data structures can be used to implement a priority queue?",
        answers: [
            { text: "Stack", correct: false },
            { text: "Linked List", correct: false },
            { text: "Heap", correct: true },
            { text: "Binary Tree", correct: false }
        ]
    },
    {
        question: "What is the height of a balanced binary tree with 'n' nodes?",
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: true },
            { text: "O(√n)", correct: false },
            { text: "O(n^2)", correct: false }
        ]
    },
    {
        question: "Which data structure allows insertion and deletion from both ends?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Deque", correct: true },
            { text: "Stack", correct: false },
            { text: "Tree", correct: false }
        ]
    },
    {
        question: "What is the time complexity of accessing an element in an array?",
        answers: [
            { text: "O(1)", correct: true },
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: false },
            { text: "O(n^2)", correct: false }
        ]
    },
    {
        question: "In a max-heap, which element is at the root?",
        answers: [
            { text: "Maximum element", correct: true },
            { text: "Minimum element", correct: false },
            { text: "Middle element", correct: false },
            { text: "Random element", correct: false }
        ]
    },
    {
        question: "Which data structure is used to check if a string is a palindrome?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Heap", correct: false },
            { text: "Array", correct: false }
        ]
    },
    {
        question: "What is the worst-case time complexity of Quick Sort?",
        answers: [
            { text: "O(n log n)", correct: false },
            { text: "O(n^2)", correct: true },
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: false }
        ]
    },
    {
        question: "What is the purpose of a hash function in a hash table?",
        answers: [
            { text: "To sort data", correct: false },
            { text: "To map keys to indices", correct: true },
            { text: "To store data", correct: false },
            { text: "To manage data storage", correct: false }
        ]
    },
    {
        question: "Which data structure is used in implementing LRU cache?",
        answers: [
            { text: "Array", correct: false },
            { text: "Linked List", correct: true },
            { text: "Queue", correct: false },
            { text: "Tree", correct: false }
        ]
    },
    {
        question: "Which of the following data structures is used for implementing graphs?",
        answers: [
            { text: "Array", correct: false },
            { text: "Linked List", correct: false },
            { text: "Adjacency List", correct: true },
            { text: "Heap", correct: false }
        ]
    },
    {
        question: "What is the average time complexity for searching in a balanced binary search tree?",
        answers: [
            { text: "O(log n)", correct: true },
            { text: "O(n)", correct: false },
            { text: "O(n^2)", correct: false },
            { text: "O(1)", correct: false }
        ]
    },
    {
        question: "Which algorithm finds the shortest path in a graph?",
        answers: [
            { text: "Dijkstra's algorithm", correct: true },
            { text: "DFS", correct: false },
            { text: "Bubble Sort", correct: false },
            { text: "Prim's algorithm", correct: false }
        ]
    },
    {
        question: "In which data structure is each element linked to its next element?",
        answers: [
            { text: "Linked List", correct: true },
            { text: "Array", correct: false },
            { text: "Stack", correct: false },
            { text: "Queue", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT an in-place sorting algorithm?",
        answers: [
            { text: "Merge Sort", correct: true },
            { text: "Quick Sort", correct: false },
            { text: "Heap Sort", correct: false },
            { text: "Selection Sort", correct: false }
        ]
    },
    {
        question: "What is the maximum number of nodes at level ‘l’ of a binary tree?",
        answers: [
            { text: "2^l", correct: true },
            { text: "l^2", correct: false },
            { text: "2l", correct: false },
            { text: "l!", correct: false }
        ]
    },
    {
        question: "What is the time complexity of finding the minimum element in a min-heap?",
        answers: [
            { text: "O(1)", correct: true },
            { text: "O(log n)", correct: false },
            { text: "O(n)", correct: false },
            { text: "O(n log n)", correct: false }
        ]
    },
    {
        question: "Which of the following is a self-balancing binary search tree?",
        answers: [
            { text: "AVL Tree", correct: true },
            { text: "Binary Tree", correct: false },
            { text: "Linked List", correct: false },
            { text: "B-Tree", correct: false }
        ]
    }
];


const questionElement = document.getElementById("Question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex=0;
  let score=0;

  function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
  }
  function showQuestion(){
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    // let currentQuestion= questions[currentQuestionIndex]
    // let questionNo= currentQuestionIndex +1;
    // questionElement.innerHTML=questionNo + ". "+ currentQuestion.
    // question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
             button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
  }

  function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer(e){
    const selectedBtn= e.target;
    const iscorrect= selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled= true;
    });
    nextButton.style.display="block";
  }

  function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
  }

  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
  }

  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
  });

  startQuiz();
  
  