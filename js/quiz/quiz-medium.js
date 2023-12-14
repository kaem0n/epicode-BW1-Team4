const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
      "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
  
  let result = 0
  const multiplier = 12.5
  const scoreToPass = 60

  const questionForms = document.getElementsByClassName('question')
  const questionContainers = document.getElementsByClassName('question-containers')
  const answers = document.getElementsByClassName('answers')
  const clockContainer1 = document.getElementById('clock')
  const clockContainer2 = document.getElementById('circle')
  const placeholder = document.getElementById('placeholder')
  
  const unselected = function (e) {
    const previousClicked = document.getElementsByClassName('clicked')[0]
    if (previousClicked) {
      previousClicked.classList.remove('clicked')
    }
  }

  const selected = function (e) {
    unselected()
    e.target.classList.add('clicked')
  }
  
  
let counter = 30
let index = 0
const clock = document.createElement('span')
const timer = setInterval(function () {
  clockContainer1.style.background = `conic-gradient(rgba(255, 255, 255, 0.3) ${
    100 - ((counter-1) * 3.3334)
    }%, #00ffff 0)`
    placeholder.classList.add('invisible')
    clock.innerHTML = `seconds <br />
    <strong>${counter-1}</strong> <br />
    remaining`
    counter -= 1
    if (index === 8) {
      clearInterval(timer)
    } else if (counter === 0) {
      const timerText = document.createElement('span')
      timerText.innerText = 'Capra!'
      timerText.classList.add('wrong-text')
      console.log('index', index)
      questionContainers[index].appendChild(timerText)
      questionForms[index].classList.add('invisible')
      if (questionForms[index+1]) {
        const submitButton = questionForms[index+1].querySelector('.special')
        submitButton.classList.remove('invisible')
      } else {
        const quizEnd = document.getElementById('quiz-end')
        quizEnd.classList.remove('invisible')
        clock.innerHTML = `<br /><strong>END</strong>`
        clearInterval(timer)
      }
      counter = 31
      index += 1
      console.log('index', index)
    }
}, 1000)
  
for (let i=0; i<questionForms.length; i++) {
  questionForms[i].addEventListener('submit', function (e) {
    e.preventDefault()
    const correctText = document.createElement('span')
    correctText.innerText = 'Corretto!'
    correctText.classList.add('correct-text')
    const wrongText = document.createElement('span')
    wrongText.innerText = 'Capra!'
    wrongText.classList.add('wrong-text')
    for (let j=0; j<answers.length; j++) {
      if (questionForms[i+1]) {
        const answerButtons = questionForms[i+1].querySelectorAll('.answers')
        for (let k=0; k<answerButtons.length; k++) {
          answerButtons[k].removeAttribute('disabled')
        }
      }
      if (answers[j].className === 'answers correct clicked') {
        questionContainers[i].appendChild(correctText)
        wrongText.innerText = ''
        questionForms[i].classList.add('invisible')
        result += 12.5
      } else {
        questionContainers[i].appendChild(wrongText)
        questionForms[i].classList.add('invisible')
      }
    }
    if (questionForms[i+1]) {
      const submitButton = questionForms[i+1].querySelector('.special')
      submitButton.classList.remove('invisible')
      counter = 31
    } else {
      const quizEnd = document.getElementById('quiz-end')
      quizEnd.classList.remove('invisible')
      clock.innerHTML = `<br /><strong>END</strong>`
      clearInterval(timer)
    }
    localStorage.setItem('result', result)
    console.log(localStorage)
    index += 1
    localStorage.setItem('index', index)
    console.log(index)
  })
}

localStorage.setItem('multiplier', multiplier)
localStorage.setItem('scoreToPass', scoreToPass)
clockContainer2.appendChild(clock)