/**********************How to change pages */

const $page1 = document.querySelector('.page1')
const $page2 = document.querySelector('.page2')
const $btnSkip = $page1.querySelector('.btn-skip')

$btnSkip.addEventListener('click', () => {
  $page1.style.display = 'none'
  $page2.style.display = 'block'
})

const myQuestions = [
  {
    question: "Qui a inventé la théorie de la relativité générale (trous de ver) ?",
    answers: {
      a: "Einstein",
      b: "Newton",
      c: "Galilée",
      d:"Copernic"
    },
    correctAnswer: "a"
  },
  {
    question: "En quelle année la premiere exoplanete a-t-elle été découverte ?",
    answers: {
      a: "1992",
      b: "1995",
      c: "2000",
      d: "1990"
    },
    correctAnswer: "b"
  },
  {
    question: "Combien de planètes gravitent autour du Soleil ?",
    answers: {
      a: "8",
      b: "7",
      c: "9",
      d: "6"
    },
    correctAnswer: "a"
  },
  {
    question: "Maitrisez-vous les gestes de premiers secours ?",
    answers: {
      a: "Oui",
      b: "Non",
     
    },
    correctAnswer: "a"
  },
  {
    question: "Si un problème survenait (quelqu’il soit). Seriez-vous en mesure de garder votre sang-froid ?",
    answers: {
      a: "Oui je sais gérer mon stress",
      b:"Cela depend de la situation",
      c: "Non je panique à la vue d'une fourmis",
     
    },
    correctAnswer: "a"
  },
  {
    question: "Dans quel domaine travaillez-vous ?",
    answers: {
      a: "Scientifique",
      b: "Agricole",
      c: "Médical",
      d: "Ingénierie",
      e: "Autre",

     
    },
    correctAnswer: "b"
  },
  {
    question: "Avez vous déjà été condamné par la justice ?",
    answers: {
      a: "Non",
      b: "Oui"

      
    },
    correctAnswer: "b"
  },
  {
    question: "Avez-vous une dépendance particulière ?",
    answers: {
      a: "Cigarettes",
      b: "Alcool",
      c: "Canabis",
      d: "Autre",
      e: "Ma seule dépendance est de scruter le ciel"

      
    },
    correctAnswer: "e"
  },
  {
    question: "Avez-vous déjà eu des problèmes cardio-vasculaire ?",
    answers: {
      a: "Non",
      b: "Oui",
      c: "Je n'ai jamais fais d'examen"

    },
    correctAnswer: "a"
  },
  {
    question: "Avez-vous déjà piloté ?",
    answers: {
      a: "Oui, une voiture",
      b: "Non",
      c: "Oui, j'ai deja piloté un engin aerien",
      d: "Je possède mon brevet de pilotage"
    },
    correctAnswer: "d"
  },
  { 
    question: "Avez-vous déjà piloté ?",
    answers: {
      a: "Oui, une voiture",
      b: "Non",
      c: "Oui, j'ai deja piloté un engin aerien",
      d: "Je possède mon brevet de pilotage"
    },
    correctAnswer: "d"
  },
  { 
    question: "Avez-vous une excellente condition physique ? nagez-vous ?",
    answers: {
      a: "Oui",
      b: "Non",
      c: "très peu d'effort"
    },
    correctAnswer: "a"
  },
  { 
    question: "Seriez-vous prêt à quitter tout ce que vous connaissez (famille, amis, culture, etc) ?",
    answers: {
      a: "Oui",
      b: "Non"
    },
    correctAnswer: "a"
  },
   { 
    question: "Avez-vous un master ou un doctorat ?",
    answers: {
      a: "Oui",
      b: "Non"
    },
    correctAnswer: "a"
  },
  { 
    question: "Avez-vous entre 24 et 45 ans ?",
    answers: {
      a: "Oui",
      b: "Non"
    },
    correctAnswer: "a"
  },
  { 
    question: "Qu’est ce que la vie pour vous ?",
    answers: {
      a: "Une aventure",
      b: "Une recherche de stabilité",
      c: "Un tremplin pour découvrir",
      d: "Une angoisse"
    },
    correctAnswer: "c"
  },
  { 
    question: "Mesurez-vous entre 1,55m et 1,90m ?",
    answers: {
      a: "Oui",
      b: "Non, je suis plus petit",
      c: "Non, je suis plus grand"
    },
    correctAnswer: "a"
  },
  { 
    question: "Êtes-vous claustrophobe ?",
    answers: {
      a: "Oui",
      b: "Non, absolument pas",
      c: "ça peut aller"
    },
    correctAnswer: "b"
  },
  { 
    question: "Laquelle de ces planètes n’a pas de lune ?",
    answers: {
      a: "Uranus",
      b: "Mars",
      c: "Mercure",
      d: "Saturne"
    },
    correctAnswer: "c"
  },
  { 
    question: "Avez-vous déjà des problèmes d’oreille interne ?",
    answers: {
      a: "Non",
      b: "Oui",
      c: "Je n'ai jamais fais d'examen"
    },
    correctAnswer: "a"
  },
  { 
    question: "Parlez-vous anglais ?",
    answers: {
      a: "Oui, je suis bilingue",
      b: "Non",
      c: "Je le parle peu"
    },
    correctAnswer: "a"
  },
  { 
    question: "Avez-vous peur de la solitude ?",
    answers: {
      a: "Oui",
      b: "Non, absolument pas",
      c: "Peut-être sur le long terme"
    },
    correctAnswer: "b"
  },
  { 
    question: "Suite au Big Bang, combien de temps a-t-il fallu pour que l’univers devienne transparent (apparition des étoiles, etc) ?",
    answers: {
      a: "Directement",
      b: "370000 ans après",
      c: "12 million d'années",
      d: "1 milliard d'années"
    },
    correctAnswer: "b"
  },
  { 
    question: "Avez-vous des problèmes de vision ?",
    answers: {
      a: "Oui, j'ai une bonne vue",
      b: "Non, je porte des lunettes",
      c: "j'ai 20 sur 20 au deux yeux"
    },
    correctAnswer: "c"
  },
  { 
    question: "Rejoindriez-vous l’armée ?",
    answers: {
      a: "Oui",
      b: "Non, jamais",
      c: "Peut-être"
    },
    correctAnswer: "a"
  },
  { 
    question: "Quelle est votre indice de masse corporel ?",
    answers: {
      a: "Entre 55 et 90kg",
      b: "Je pèse moins de 55kg",
      c: "Je pèse plus de 90kg"
    },
    correctAnswer: "a"
  },
  { 
    question: "Souffrez-vous d’acrophobie (peur du vide) ?",
    answers: {
      a: "Oui",
      b: "Non, absolument pas",
      c: "légèrement"
    },
    correctAnswer: "b"
  },
  { 
    question: "Avez-vous eu des accidents vous handicapant dans la vie de tous les jours ?",
    answers: {
      a: "Oui, malheureusement",
      b: "Non, jamais",
      c: "J'en ai eu mais sans séquelles"
    },
    correctAnswer: "b"
  },
  { 
    question: "Que vous apporterait la vie sur Mars ?",
    answers: {
      a: "La fuite",
      b: "La découverte",
      c: "La reconstruction",
      d: "L'ambition"
    },
    correctAnswer: "b"
  },
  { 
    question: "Ressentez-vous souvent des sensations de vertiges ?",
    answers: {
      a: "Oui",
      b: "Non, jamais",
      c: "Non mais je ne suis pas très à l'aise avec les hauteurs"
    },
    correctAnswer: "b"
  },
  { 
    question: "Astronaute étant un métier à risque, seriez-vous prêt à risquer votre vie ?",
    answers: {
      a: "Oui, je suis conscient des risques",
      b: "Non, je ne suis pas prêt",
      c: "pas encore"
    },
    correctAnswer: "a"
  } 
]


const buildQuiz = () => {
  // we'll need a place to store the HTML output
  const output = []

  // for each question
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // we'll want to store the list of answer choices
    const answers = []

    //for each available answer
    for (letter in currentQuestion.answers) {
      // add an HTML radio button
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
         </label>`
      )
    }

    // add this question and its answers to the output
    output.push(
      `<div class="slide slide-${questionNumber}">
         <div class="question question${questionNumber}"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join("")} </div>
       </div>`
    )
  })

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("")
}

const showResults = () => {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers")

  // keep track of user's answers
  let numCorrect = 0

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber]
    const selector = `input[name=question${questionNumber}]:checked`
    const userAnswer = (answerContainer.querySelector(selector) || {}).value

    document.addEventListener('change', ()=>{
      

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen"
    } else {
      // if answer is wrong or blank
      // color the answers red
      answerContainers[questionNumber].style.color = "red"
    }
  })

})

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${Math.round((numCorrect*100)/myQuestions.length)}% of right answers`
}

// showslide by swaping active class
const showSlide = (n) => {

  
  slides[currentSlide].classList.remove("active-slide")
  slides[n].classList.add("active-slide")
  currentSlide = n

  // if  last slide is shown display submit button
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block"


    // else if not display next button
  } else if(currentSlide <= slides.length-1 ){
    nextButton.style.display = "inline-block"
    submitButton.style.display = "none"
  }
  else{
    showResults()
  }
//   TweenLite.from(s1, 1, {opacity:0, left:"600px", display:"none"})
 }
// increment current slide
const showNextSlide = ()=> {
  showSlide(currentSlide+1)
  // let tlFadeOut = new TimelineLite()
  // tlFadeOut.to($)

} 
// Next question handler
document.addEventListener('change', (e)=>{

  if (`input[name=question]:checked`){
  showNextSlide()
  } 
})

// Get DOM element 
const quizContainer = document.getElementById("quiz")
const resultsContainer = document.getElementById("results")
const submitButton = document.getElementById("submit")

// Display quiz right away
buildQuiz()

// Get DOM element
const nextButton = document.getElementById("next")
const slides = document.querySelectorAll(".slide")
let currentSlide = 0

// start by showing first slide
showSlide(0)

// On submit, show results
submitButton.addEventListener("click", showResults)
nextButton.addEventListener("click", showNextSlide)


// ANIMATION
// const s1 = document.querySelector('.slide-0') 
// console.log(s1)

// const init = () =>
// {
//   showSlide(currentSlide)


// }

// init()
// var tl = new TimelineLite({paused:true});
// tl.from(question, 1 , {left:"600px", opacity:0})
//   .from(timelineLite, 0.5, {width:"0px", alpha:0}, "-=0.2")
//   .staggerFrom(question, 05, {{left:"600px", opacity:0, alpha:0, scale:1.8}, 0.2);


// // Easing Body + Logo
// TweenMax.from(".logo", 1,{opacity:0})
// TweenMax.from("body", 1,{opacity:0})

// const buildQuiz = () => {
//   // we'll need a place to store the HTML output
//   const output = []
//   // for each question
//   myQuestions.forEach((currentQuestion, questionNumber) => {
//     //  to store the list of answer choices
//     const answers = []
//     //  for each available answer
//     for (letter in currentQuestion.answers) {
//       // add an HTML radio button
//       answers.push(
//         `<label>
//            <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//          </label>`
//       )}

//     // add this question and its answers to the output
//     output.push(
//       `<div class="slide">
//          <div class="question"> ${currentQuestion.question} </div>
//          <div class="answers"> ${answers.join("")} </div>
//        </div>`
//     )
//   })
//   // finally combine our output list into one string of HTML and put it on the page
//   quizContainer.innerHTML = output.join("")
// }

// const showResults = () => {
//   // gather answer containers from our quiz
//   const answerContainers = quizContainer.querySelectorAll(".answers")
//   // keep track of user's answers
//   let numCorrect = 0

//   // for each question...
//   myQuestions.forEach((currentQuestion, questionNumber) => {
//     // find selected answer
//     const answerContainer = answerContainers[questionNumber]
//     const selector = `input[name=question${questionNumber}]:checked`
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value

//     // if answer is correct
//     if (userAnswer === currentQuestion.correctAnswer) {
//       // add to the number of correct answers
//       numCorrect++

//       // color the answers green
//       answerContainers[questionNumber].style.color = "lightgreen"
//     } else {
//       // if answer is wrong or blank
//       // color the answers red
//       answerContainers[questionNumber].style.color = "red"
//     }
//   })

//   // show number of correct answers out of total
//   resultsContainer.innerHTML = `${Math.round((numCorrect*100)/myQuestions.length)}% of right answers`
// }

// // showslide by swaping active class
// const showSlide = (n) => {
//   slides[currentSlide].classList.remove("active-slide")
//   slides[n].classList.add("active-slide")
//   currentSlide = n

//   // if  last slide is shown display submit button
//   if (currentSlide === slides.length - 1) {
//     nextButton.style.display = "none"
//     submitButton.style.display = "inline-block"


//     // else if not display next button
//   } else if(currentSlide <= slides.length-1 ){
//     nextButton.style.display = "inline-block"
//     submitButton.style.display = "none"
//   }
//   else{
//     showResults()
//   }
// }
// // increment current slide
// const showNextSlide = ()=> {
//   showSlide(currentSlide+1)
// } 
// // Next question handler
// document.addEventListener('keydown', (e) => {

//   console.log('keydown')
//   console.log(e.keyCode)

//   if(e.keyCode==39){
//     showNextSlide()
        
//     // TweenMax.to(slide, 0.5, {opacity:0})
//   } 
// })

// // Get DOM element 
// const quizContainer = document.getElementById("quiz")
// const resultsContainer = document.getElementById("results")
// const submitButton = document.getElementById("submit")

// // Display quiz right away
// buildQuiz()

// // Get DOM element
// const nextButton = document.getElementById("next")
// const slides = document.querySelectorAll(".slide")
// let currentSlide = 0

// // start by showing first slide
// showSlide(0)

// // On submit, show results
// submitButton.addEventListener("click", showResults)
// nextButton.addEventListener("click", showNextSlide)


// // ANIMATION

// Easing Body + Logo
TweenMax.from(".logo", 1,{opacity:0})
TweenMax.from("body", 1,{opacity:0})


