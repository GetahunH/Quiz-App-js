const configContainer = document.querySelector('.config-container');
const quizContainer = document.querySelector('.quiz-container');
const answerOptions = document.querySelector('.answer-options');
const nextQuestionBtn = document.querySelector('.next-question-btn');
const questionStatus = document.querySelector('.question-status');
const timerDisplay = document.querySelector('.time-duration');
const resultContainer = document.querySelector('.result-container');

//quiz state variables
const QUIZ_TIME_LIMIT=15;
let currentTime = QUIZ_TIME_LIMIT;
let timer=null;
let quizCategory = "General Knowledge";
let numberQuestions = 5;
let currentQuestion = null;
const questionIndexHistory = [];
let correctAnswerCount = 0;


//display the quiz result and and hide the quiz container
const showQuizResult = () =>{
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  const resultText=`You answered <b>${correctAnswerCount}</b> out of <b>${numberQuestions}</b> questions correctly. Great effert!`;
  document.querySelector('.result-message').innerHTML =resultText;
}
// clear and reset timer
const resetTimer=()=>{
  clearInterval(timer);
  currentTime=QUIZ_TIME_LIMIT;
  timerDisplay.textContent=`${currentTime}s`;
}
//Initialize and start timer for the current qustion
const startTimer=()=>{
  timer=setInterval(()=>{
    currentTime--;
   timerDisplay.textContent=`${currentTime}s`;
    if(currentTime<=0){
      clearInterval(timer);
      highlightCorrectAnswer();
      nextQuestionBtn.style.visibility='visible';
      quizContainer.querySelector('.quiz-timer').style.background="#c31402";
      answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = 'none' );
 
    }
  },1000)
}


const getRandomQuestion = () =>{
 const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];
//show the results if all questions have been used
if(questionIndexHistory.length >= Math.min(categoryQuestions.length,numberQuestions)){
return showQuizResult();
}
// filter out already asked questions and choose a random one
 const availaleQuestion = categoryQuestions.filter((_,index)=> !questionIndexHistory.includes(index));
 const randomQuestion = availaleQuestion[Math.floor(Math.random() * availaleQuestion.length)];
//  console.log(randomQuestion);
questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion))
return randomQuestion;

}
//highlight the correct answer and add icon
const highlightCorrectAnswer = ()=>{
  const correctOption = answerOptions.querySelectorAll('.answer-option')[currentQuestion.correctAnswer];
  correctOption.classList.add('correct');
  const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`
  correctOption.insertAdjacentHTML('beforeend',iconHTML);
}
//handle the user's answer selection
const handleAnswer = (option, answerIndex)=>{
  clearInterval(timer);
  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? 'correct' : 'incorrect');
  !isCorrect ? highlightCorrectAnswer() :correctAnswerCount++;
  //insert icon based on the correctness
  const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle': 'cancel'}</span>`
  option.insertAdjacentHTML('beforeend',iconHTML);
  //disable all answer options after one option is selected
  answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = 'none' );
  nextQuestionBtn.style.visibility='visible';
}
//render the current questions and its options in the quiz
const renderQuestion = ()=>{
  currentQuestion  = getRandomQuestion();
   if(!currentQuestion) return;

   resetTimer();
   startTimer();
  //  console.log(currentQuestion); 
//update the UI
answerOptions.innerHTML ="";
nextQuestionBtn.style.visibility='hidden';
quizContainer.querySelector('.quiz-timer').style.background="#32313c";
 document.querySelector('.question-text').textContent = currentQuestion.question;
 questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberQuestions}</b> Question`;
 //create option <li> elements and append them, and add click envent listner
 currentQuestion.options.forEach((option, index) => {
  const li = document.createElement("li");
  li.classList.add('answer-option');
  li.textContent = option;
  answerOptions.appendChild(li);
  li.addEventListener('click',()=>handleAnswer(li, index));
 });
}
//start the quiz and render the random question
const startQuiz = ()=>{
  configContainer.style.display ='none';
  quizContainer.style.display ="block";

// update the quiz category and  number of questions
  quizCategory = configContainer.querySelector('.category-option.active').textContent;
  numberQuestions = parseInt(configContainer.querySelector('.question-option.active').textContent);
  

  renderQuestion();
}
//highlight the selected option on the click -category or no. of questions
document.querySelectorAll(".category-option, .question-option").forEach(option => {
  option.addEventListener('click',()=>{
    option.parentNode.querySelector('.active').classList.remove("active");
    option.classList.add('active');
  });
});
//reset the quiz and return to the configuration container
const resetQuiz=()=>{
  resetTimer();
  correctAnswerCount=0;
  questionIndexHistory.length=0;
  configContainer.style.display='block';
  resultContainer.style.display='none';
}
renderQuestion();
nextQuestionBtn.addEventListener('click', renderQuestion);
document.querySelector(".try-again-btn").addEventListener('click',resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener('click',startQuiz)
