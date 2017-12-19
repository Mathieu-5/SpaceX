

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
      }
      
    ];
  
   const buildQuiz=()=> {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    const showResults = () => {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${Math.round((numCorrect*100)/myQuestions.length)}% of right answers`;
    }
  
    const showSlide = (n) => {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
    
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    
      } else if(currentSlide <= slides.length-1 ){
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
      else{
        showResults();
      }
    }
  
    // Next question handler
    document.addEventListener('keydown', (e)=>{

      console.log('keydown')
      console.log(e.keyCode)

      if(e.keyCode==39){
        showNextSlide()
      }
      if(currentSlide === slides.length){
        showResults()
      }
    })

    const showNextSlide = ()=> {
      showSlide(currentSlide + 1);

  } 
   
  
  // Get DOM element 
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // Display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // On submit, show results
    submitButton.addEventListener("click", showResults);
    // previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  
  

