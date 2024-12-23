const questions = [
  // html questions
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Trainer Marking Language", Correct: false },
        { text: "Hyper Text Markup Language", Correct: true },
        { text: "Hyper Text Marketing Language", Correct: false },
        { text: "Hyperlink and Text Markup Language", Correct: false }
      ]
    },
    {
      question: "Which HTML tag is used to create a paragraph?",
      answers: [
        { text: "div", Correct: false },
        { text: "p", Correct: true },
        { text: "a", Correct: false },
        { text: "section", Correct: false }
      ]
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      answers: [
        { text: "br", Correct: true },
        { text: "lb", Correct: false },
        { text: "break", Correct: false },
        { text: "newline", Correct: false }
      ]
    },
    {
      question: "Which attribute specifies an alternate text for an image if the image cannot be displayed?",
      answers: [
        { text: "title", Correct: false },
        { text: "alt", Correct: true },
        { text: "src", Correct: false },
        { text: "link", Correct: false }
      ]
    },
    {
      question: "What is the correct HTML tag for the largest heading?",
      answers: [
        { text: "head", Correct: false },
        { text: "h6", Correct: false },
        { text: "h1", Correct: true },
        { text: "header", Correct: false }
      ]
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      answers: [
        { text: "css", Correct: false },
        { text: "script", Correct: false },
        { text: "style", Correct: true },
        { text: "link", Correct: false }
      ]
    },
    {
      question: "How can you create an unordered list in HTML?",
      answers: [
        { text: "ul", Correct: true },
        { text: "ol", Correct: false },
        { text: "li", Correct: false },
        { text: "list", Correct: false }
      ]
    },
    {
      question: "Which HTML element is used to specify a footer for a document?",
      answers: [
        { text: "footer", Correct: true },
        { text: "bottom", Correct: false },
        { text: "end", Correct: false },
        { text: "section", Correct: false }
      ]
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      answers: [
        { text: "style", Correct: true },
        { text: "class", Correct: false },
        { text: "id", Correct: false },
        { text: "font", Correct: false }
      ]
    },
    {
      question: "What is the purpose of the title tag in HTML?",
      answers: [
        { text: "To set the main heading", Correct: false },
        { text: "To set the title of the document shown in the browser tab", Correct: true },
        { text: "To style the text", Correct: false },
        { text: "To create a link", Correct: false }
      ]
    },
   /* {
      question: "Which tag is used to create a hyperlink in HTML?",
      answers: [
        { text: "a", Correct: true },
        { text: "link", Correct: false },
        { text: "href", Correct: false },
        { text: "url", Correct: false }
      ]
    },
    {
      question: "How can you make a numbered list in HTML?",
      answers: [
        { text: "ul", Correct: false },
        { text: "ol", Correct: true },
        { text: "li", Correct: false },
        { text: "dl", Correct: false }
      ]
    },
    {
      question: "Which HTML tag is used to embed an image?",
      answers: [
        { text: "img", Correct: true },
        { text: "image", Correct: false },
        { text: "pic", Correct: false },
        { text: "figure", Correct: false }
      ]
    },
    {
      question: "How can you make text bold in HTML?",
      answers: [
        { text: "strong", Correct: false },
        { text: "bold", Correct: false },
        { text: "b", Correct: true },
        { text: "text-bold", Correct: false }
      ]
    },
    {
      question: "What is the purpose of the <!DOCTYPE html> declaration?",
      answers: [
        { text: "To link CSS to HTML", Correct: false },
        { text: "To declare the document type and HTML version", Correct: true },
        { text: "To link JavaScript to HTML", Correct: false },
        { text: "To style the document", Correct: false }
      ]
    }
  ];*/
  
    // CSS Questions
    {
        question: "Which of the following is the correct syntax for referring to an external style sheet?",
        answers: [
            { text: "style src='style.css'", Correct: false },
            { text: "stylesheet style.css /stylesheet", Correct: false },
            { text: "link rel='stylesheet' type='text/css' href='style.css'", Correct: true },
            { text: "link src='style.css'", Correct: false }
        ]
    },
    {
        question: " Which property is used to change the background color?",
        answers: [
            { text: "color", Correct: false },
            { text: "bgcolor", Correct: false },
            { text: "background-color", Correct: true },
            { text: "background", Correct: false }
        ]
    },
    {
        question: " Which CSS property controls the text size?",
        answers: [
            { text: "font-size", Correct: true },
            { text: "text-style", Correct: false },
            { text: "text-size", Correct: false },
            { text: "font-style", Correct: false }
        ]
    },
    {
        question: " How do you make each word in a text start with a capital letter?",
        answers: [
            { text: "text-transform:capitalize", Correct: true },
            { text: "text-style:capitalize", Correct: false },
            { text: "transform:capitalize", Correct: false },
            { text: "You can't do that with CSS", Correct: false }
        ]
    },
    {
        question: " Which property is used to change the font of an element?",
        answers: [
            { text: "font-family", Correct: true },
            { text: "font-weight", Correct: false },
            { text: "font-style", Correct: false },
            { text: "font", Correct: false }
        ]
    },
    {
        question: " What is the default value of the position property?",
        answers: [
            { text: "absolute", Correct: false },
            { text: "fixed", Correct: false },
            { text: "relative", Correct: false },
            { text: "static", Correct: true }
        ]
    },
    {
        question: " Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "fgcolor", Correct: false },
            { text: "color", Correct: true },
            { text: "text-color", Correct: false },
            { text: "font-color", Correct: false }
        ]
    },
    {
        question: " How do you select an element with id 'demo'?",
        answers: [
            { text: "#demo", Correct: true },
            { text: ".demo", Correct: false },
            { text: "demo", Correct: false },
            { text: "*demo", Correct: false }
        ]
    },
    {
        question: " How do you make a list that lists its items with squares?",
        answers: [
            { text: "list-style-type: square", Correct: true },
            { text: "list-type: square", Correct: false },
            { text: "type: square", Correct: false },
            { text: "list-square", Correct: false }
        ]
    },
    {
        question: " Which property is used to make the text bold?",
        answers: [
            { text: "text-decoration: bold", Correct: false },
            { text: "font-weight: bold", Correct: true },
            { text: "font-style: bold", Correct: false },
            { text: "text-style: bold", Correct: false }
        ]
    },

    // JavaScript Questions
    {
        question: " Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "javascript", Correct: false },
            { text: "script", Correct: true },
            { text: "js", Correct: false },
            { text: "scripting", Correct: false }
        ]
    },
    {
        question: " How do you create a function in JavaScript?",
        answers: [
            { text: "function:myFunction()", Correct: false },
            { text: "function = myFunction()", Correct: false },
            { text: "function myFunction()", Correct: true },
            { text: "create myFunction()", Correct: false }
        ]
    },
    {
        question: " How do you call a function named 'myFunction'?",
        answers: [
            { text: "call myFunction()", Correct: false },
            { text: "myFunction()", Correct: true },
            { text: "call function myFunction", Correct: false },
            { text: "Call.myFunction()", Correct: false }
        ]
    },
    {
        question: " How to write an 'if' statement in JavaScript?",
        answers: [
            { text: "if i = 5 then", Correct: false },
            { text: "if i == 5 then", Correct: false },
            { text: "if (i == 5)", Correct: true },
            { text: "if i = 5", Correct: false }
        ]
    },
    {
        question: " How does a 'for' loop start?",
        answers: [
            { text: "for (i = 0; i <= 5)", Correct: false },
            { text: "for (i = 0; i <= 5; i++)", Correct: true },
            { text: "for i = 1 to 5", Correct: false },
            { text: "for (i <= 5; i++)", Correct: false }
        ]
    },
    {
        question: " What is the correct way to write a JavaScript array?",
        answers: [
            { text: "var colors = (1:'red', 2:'green', 3:'blue')", Correct: false },
            { text: "var colors = 'red', 'green', 'blue'", Correct: false },
            { text: "var colors = ['red', 'green', 'blue']", Correct: true },
            { text: "var colors = {1:'red', 2:'green', 3:'blue'}", Correct: false }
        ]
    },
    {
        question: " How do you round the number 7.25 to the nearest integer?",
        answers: [
            { text: "Math.round(7.25)", Correct: true },
            { text: "Math.rnd(7.25)", Correct: false },
            { text: "round(7.25)", Correct: false },
            { text: "rnd(7.25)", Correct: false }
        ]
    },
    {
        question: " How do you find the number with the highest value of x and y?",
        answers: [
            { text: "Math.max(x, y)", Correct: true },
            { text: "Math.ceil(x, y)", Correct: false },
            { text: "top(x, y)", Correct: false },
            { text: "ceil(x, y)", Correct: false }
        ]
    },
    {
        question: " Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onchange", Correct: false },
            { text: "onclick", Correct: true },
            { text: "onmouseover", Correct: false },
            { text: "onmouseclick", Correct: false }
        ]
    },
    {
        question: " How do you declare a JavaScript variable?",
        answers: [
            { text: "variable carName;", Correct: false },
            { text: "var carName;", Correct: true },
            { text: "v carName;", Correct: false },
            { text: "carName = var;", Correct: false }
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
        if(answer.Correct){
             button.dataset.correct=answer.Correct;
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
    const isCorrect= selectedBtn.dataset.correct === "true";
    if(isCorrect){
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
  