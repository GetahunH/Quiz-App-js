const answerOptions = document.querySelector('.answer-options');
const nextQuestionBtn = document.querySelector('.next-question-btn');
const questionStatus = document.querySelector('.question-status');

let quizCategory = "General Knowledge";
let numberQuestions = 10;
let currentQuestion = null;
const questioIndexHistory = [];

const getRandomQuestion = () =>{
 const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];
//the results if all questions have been used
if(questioIndexHistory.length >= Math.min(categoryQuestions.length,numberQuestions)){
return console.log('Quiz Completed');
}
// filter out already asked questions and choose a random one
 const availaleQuestion = categoryQuestions.filter((_,index)=> !questioIndexHistory.includes(index));
 const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
//  console.log(randomQuestion);
questioIndexHistory.push(categoryQuestions.indexOf(randomQuestion))
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
  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? 'correct' : 'incorrect');
  !isCorrect ? highlightCorrectAnswer() :"";
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
  //  console.log(currentQuestion); 
//update the UI
answerOptions.innerHTML ="";
nextQuestionBtn.style.visibility='hidden';
 document.querySelector('.question-text').textContent = currentQuestion.question;
 questionStatus.innerHTML = `<b>${questioIndexHistory.length}</b> of <b>${numberQuestions}</b> Question`;
 //create option <li> elements and append them, and add click envent listner
 currentQuestion.options.forEach((option, index) => {
  const li = document.createElement("li");
  li.classList.add('answer-option');
  li.textContent = option;
  answerOptions.appendChild(li);
  li.addEventListener('click',()=>handleAnswer(li, index));
 });
}

renderQuestion();
nextQuestionBtn.addEventListener('click', renderQuestion);
