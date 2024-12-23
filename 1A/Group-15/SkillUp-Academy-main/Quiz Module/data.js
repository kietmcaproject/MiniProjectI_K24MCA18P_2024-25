const questions = [
    // Python Questions
    {
      question: "Which Python library is widely used for data manipulation and analysis?",
      answers: [
        { text: "Seaborn", correct: false },
        { text: "Pandas", correct: true },
        { text: "Django", correct: false },
        { text: "Flask", correct: false }
      ]
    },
    {
      question: "What does `df.head()` do in Python when using Pandas?",
      answers: [
        { text: "Displays the first 5 rows of the DataFrame", correct: true },
        { text: "Displays the last 5 rows of the DataFrame", correct: false },
        { text: "Displays the summary of the DataFrame", correct: false },
        { text: "Displays all rows of the DataFrame", correct: false }
      ]
    },
    {
      question: "How do you import the numpy library in Python?",
      answers: [
        { text: "import numpy", correct: true },
        { text: "import np", correct: false },
        { text: "include numpy", correct: false },
        { text: "load numpy", correct: false }
      ]
    },
    {
      question: "What does the `len()` function do in Python?",
      answers: [
        { text: "Returns the length of an object", correct: true },
        { text: "Sorts a list", correct: false },
        { text: "Concatenates two strings", correct: false },
        { text: "Calculates the mean of a list", correct: false }
      ]
    },
    {
      question: "Which symbol is used for comments in Python?",
      answers: [
        { text: "//", correct: false },
        { text: "#", correct: true },
        { text: "/*", correct: false },
        { text: "!--", correct: false }
      ]
    },
    {
      question: "What does `plt.show()` do in Python when using Matplotlib?",
      answers: [
        { text: "Displays a plot", correct: true },
        { text: "Saves a plot", correct: false },
        { text: "Clears a plot", correct: false },
        { text: "Creates a figure", correct: false }
      ]
    },
    {
      question: "Which Python library is commonly used for data visualization?",
      answers: [
        { text: "Pandas", correct: false },
        { text: "Matplotlib", correct: true },
        { text: "Numpy", correct: false },
        { text: "Scikit-learn", correct: false }
      ]
    },
    {
      question: "What does the `mean()` function in NumPy do?",
      answers: [
        { text: "Calculates the median of an array", correct: false },
        { text: "Calculates the mean of an array", correct: true },
        { text: "Calculates the mode of an array", correct: false },
        { text: "Calculates the sum of an array", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `train_test_split` function in scikit-learn?",
      answers: [
        { text: "To scale the data", correct: false },
        { text: "To split the data into training and testing sets", correct: true },
        { text: "To normalize the data", correct: false },
        { text: "To reduce dimensionality", correct: false }
      ]
    },
    {
      question: "Which function is used to calculate the standard deviation of an array in NumPy?",
      answers: [
        { text: "np.average()", correct: false },
        { text: "np.mean()", correct: false },
        { text: "np.std()", correct: true },
        { text: "np.var()", correct: false }
      ]
    },
  
    // R Programming Questions
    {
      question: "Which function in R is used to view the first few rows of a data frame?",
      answers: [
        { text: "head()", correct: true },
        { text: "first()", correct: false },
        { text: "top()", correct: false },
        { text: "show()", correct: false }
      ]
    },
    {
      question: "Which symbol is used to assign values to variables in R?",
      answers: [
        { text: "=", correct: false },
        { text: "-", correct: true },
        { text: ";", correct: false },
        { text: "::", correct: false }
      ]
    },
    {
      question: "Which package in R is used for data manipulation?",
      answers: [
        { text: "tidyr", correct: false },
        { text: "dplyr", correct: true },
        { text: "ggplot2", correct: false },
        { text: "caret", correct: false }
      ]
    },
    {
      question: "What does `summary()` do in R?",
      answers: [
        { text: "Provides summary statistics of a dataset", correct: true },
        { text: "Creates a plot of the data", correct: false },
        { text: "Joins two data frames", correct: false },
        { text: "Applies a filter to the data", correct: false }
      ]
    },
    {
      question: "Which function is used to read CSV files in R?",
      answers: [
        { text: "import_csv()", correct: false },
        { text: "read.csv()", correct: true },
        { text: "load.csv()", correct: false },
        { text: "read.table()", correct: false }
      ]
    },
    {
      question: "Which R function is used to concatenate strings?",
      answers: [
        { text: "str_concat()", correct: false },
        { text: "concat()", correct: false },
        { text: "paste()", correct: true },
        { text: "merge()", correct: false }
      ]
    },
    {
      question: "What does `ggplot2` in R primarily help with?",
      answers: [
        { text: "Data manipulation", correct: false },
        { text: "Data visualization", correct: true },
        { text: "Data cleaning", correct: false },
        { text: "Statistical modeling", correct: false }
      ]
    },
    {
      question: "What does `na.omit()` do in R?",
      answers: [
        { text: "Removes rows with missing values", correct: true },
        { text: "Calculates missing values", correct: false },
        { text: "Fills missing values with zeros", correct: false },
        { text: "Displays missing values", correct: false }
      ]
    },
    {
      question: "How do you calculate the mean of a vector in R?",
      answers: [
        { text: "mean(vector)", correct: true },
        { text: "average(vector)", correct: false },
        { text: "sum(vector)", correct: false },
        { text: "total(vector)", correct: false }
      ]
    },
    {
        question: "What is reinforcement learning?",
        answers: [
          { text: "A machine learning approach that learns from rewards and penalties", correct: true },
          { text: "A type of data pre-processing technique", correct: false },
          { text: "A clustering algorithm", correct: false },
          { text: "A feature selection method", correct: false }
        ]
    },
    // Data Science Questions
    {
      question: "What is the main purpose of a regression model?",
      answers: [
        { text: "To classify data", correct: false },
        { text: "To predict continuous outcomes", correct: true },
        { text: "To cluster data", correct: false },
        { text: "To reduce data dimensionality", correct: false }
      ]
    },
    {
      question: "What does `overfitting` mean in a machine learning model?",
      answers: [
        { text: "The model fits the training data well but performs poorly on new data", correct: true },
        { text: "The model performs well on both training and test data", correct: false },
        { text: "The model has too few parameters", correct: false },
        { text: "The model is unable to find patterns in the data", correct: false }
      ]
    },
    {
      question: "What is the most commonly used metric for evaluating classification models?",
      answers: [
        { text: "Mean Absolute Error", correct: false },
        { text: "Accuracy", correct: true },
        { text: "R-squared", correct: false },
        { text: "Root Mean Squared Error", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `train-test split` in machine learning?",
      answers: [
        { text: "To improve the performance of a model", correct: false },
        { text: "To evaluate model performance on unseen data", correct: true },
        { text: "To scale the data", correct: false },
        { text: "To balance the dataset", correct: false }
      ]
    },
    {
      question: "What type of analysis does k-means clustering perform?",
      answers: [
        { text: "Supervised learning", correct: false },
        { text: "Unsupervised learning", correct: true },
        { text: "Semi-supervised learning", correct: false },
        { text: "Reinforcement learning", correct: false }
      ]
    },
    {
      question: "What does `EDA` stand for in data science?",
      answers: [
        { text: "Exploratory Data Analysis", correct: true },
        { text: "Experimental Data Analysis", correct: false },
        { text: "External Data Aggregation", correct: false },
        { text: "Evaluation Data Assessment", correct: false }
      ]
    },
    {
      question: "Which of the following techniques is used for dimensionality reduction?",
      answers: [
        { text: "Random Forest", correct: false },
        { text: "PCA (Principal Component Analysis)", correct: true },
        { text: "Logistic Regression", correct: false },
        { text: "Decision Tree", correct: false }
      ]
    },
    {
      question: "Which evaluation metric is often used for regression tasks?",
      answers: [
        { text: "Accuracy", correct: false },
        { text: "Mean Squared Error (MSE)", correct: true },
        { text: "F1 Score", correct: false },
        { text: "Recall", correct: false }
      ]
    },
    {
        question: "Which algorithm is often used in AI for classification tasks?",
        answers: [
          { text: "Linear Regression", correct: false },
          { text: "Decision Trees", correct: true },
          { text: "PCA", correct: false },
          { text: "Gradient Descent", correct: false }
        ]
      },
      {
        question: "What is a neural network primarily used for?",
        answers: [
          { text: "Sorting data", correct: false },
          { text: "Predicting complex patterns", correct: true },
          { text: "Data cleaning", correct: false },
          { text: "Data visualization", correct: false }
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
  
  