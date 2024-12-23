const questions = [
    // DIGITAL MARKETING QUESTIONS
    {
        question: "Which metric indicates the percentage of visitors who leave a website after viewing only one page?",
        answers: [
            { text: "Bounce Rate", correct: true },
            { text: "Conversion Rate", correct: false },
            { text: "Click-Through Rate", correct: false },
            { text: "Engagement Rate", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of SEO?",
        answers: [
            { text: "To improve website ranking on search engines", correct: true },
            { text: "To increase social media followers", correct: false },
            { text: "To enhance the website design", correct: false },
            { text: "To manage email campaigns", correct: false }
        ]
    },
    {
        question: "What does PPC stand for?",
        answers: [
            { text: "Pay Per Click", correct: true },
            { text: "Paid Public Campaign", correct: false },
            { text: "Pay Per Conversion", correct: false },
            { text: "Paid Per Content", correct: false }
        ]
    },
    {
        question: "Which platform is best suited for B2B marketing?",
        answers: [
            { text: "Instagram", correct: false },
            { text: "LinkedIn", correct: true },
            { text: "TikTok", correct: false },
            { text: "Snapchat", correct: false }
        ]
    },
    {
        question: "What does CTA stand for in digital marketing?",
        answers: [
            { text: "Click To Action", correct: false },
            { text: "Call To Action", correct: true },
            { text: "Call Through Access", correct: false },
            { text: "Content Target Audience", correct: false }
        ]
    },
    {
        question: "Which social media platform is primarily image-based?",
        answers: [
            { text: "Twitter", correct: false },
            { text: "Instagram", correct: true },
            { text: "LinkedIn", correct: false },
            { text: "Reddit", correct: false }
        ]
    },
    {
        question: "What is content marketing?",
        answers: [
            { text: "Marketing through television", correct: false },
            { text: "Creating valuable content to attract customers", correct: true },
            { text: "Using ads to reach potential buyers", correct: false },
            { text: "Sending promotional emails", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of organic search result?",
        answers: [
            { text: "Google Ad", correct: false },
            { text: "Unpaid listing on Google", correct: true },
            { text: "Sponsored post", correct: false },
            { text: "Paid collaboration", correct: false }
        ]
    },
    {
        question: "What does KPI stand for?",
        answers: [
            { text: "Key Promotion Indicator", correct: false },
            { text: "Key Product Insight", correct: false },
            { text: "Key Performance Indicator", correct: true },
            { text: "Knowledge Priority Indicator", correct: false }
        ]
    },
    {
        question: "What is a good CTR for an email campaign?",
        answers: [
            { text: "Less than 1%", correct: false },
            { text: "Between 2% and 5%", correct: true },
            { text: "Over 10%", correct: false },
            { text: "Exactly 0%", correct: false }
        ]
    },
    {
        question: "Which type of marketing uses influencers to promote products?",
        answers: [
            { text: "Email marketing", correct: false },
            { text: "Affiliate marketing", correct: false },
            { text: "Influencer marketing", correct: true },
            { text: "Content marketing", correct: false }
        ]
    },
    {
        question: "What does 'remarketing' mean?",
        answers: [
            { text: "Marketing to new customers", correct: false },
            { text: "Showing ads to people who've visited your site", correct: true },
            { text: "Sending emails to subscribers", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which metric measures the total revenue from a marketing campaign?",
        answers: [
            { text: "Conversion rate", correct: false },
            { text: "Return on Investment (ROI)", correct: true },
            { text: "Click-through rate", correct: false },
            { text: "Customer Lifetime Value", correct: false }
        ]
    },
    {
        question: "What is the purpose of A/B testing?",
        answers: [
            { text: "To test two versions of a campaign to see which performs better", correct: true },
            { text: "To conduct surveys", correct: false },
            { text: "To check website security", correct: false },
            { text: "To analyze competitors", correct: false }
        ]
    },
    {
        question: "What does 'organic traffic' refer to?",
        answers: [
            { text: "Traffic from paid ads", correct: false },
            { text: "Traffic from search engines without paid promotion", correct: true },
            { text: "Traffic from social media", correct: false },
            { text: "Traffic from email campaigns", correct: false }
        ]
    },
    {
        question: "Which social media platform is best for visual content marketing?",
        answers: [
            { text: "Twitter", correct: false },
            { text: "Instagram", correct: true },
            { text: "LinkedIn", correct: false },
            { text: "Reddit", correct: false }
        ]
    },
    {
        question: "What does CPM stand for?",
        answers: [
            { text: "Cost Per Thousand Impressions", correct: true },
            { text: "Cost Per Million Impressions", correct: false },
            { text: "Click Per Measure", correct: false },
            { text: "Conversion Per Million", correct: false }
        ]
    },
    {
        question: "Which metric is used to evaluate user engagement on social media?",
        answers: [
            { text: "Click-through rate", correct: false },
            { text: "Bounce rate", correct: false },
            { text: "Engagement rate", correct: true },
            { text: "Conversion rate", correct: false }
        ]
    },
    {
        question: "Which strategy focuses on tailoring content to a specific audience?",
        answers: [
            { text: "Personalization", correct: true },
            { text: "Generalization", correct: false },
            { text: "Randomization", correct: false },
            { text: "Ad placement", correct: false }
        ]
    },
    {
        question: "Which file format is best for high-quality images on websites?",
        answers: [
            { text: "JPEG", correct: true },
            { text: "GIF", correct: false },
            { text: "MP4", correct: false },
            { text: "TXT", correct: false }
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
  
  