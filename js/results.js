const result = localStorage.getItem("result");
const index = localStorage.getItem('index')
const multiplier = localStorage.getItem('multiplier')
const scoreToPass = localStorage.getItem('scoreToPass')
console.log("result", result);
const innerCircle = document.getElementById("inside-circle");
const congratsDiv = document.createElement("div");

congratsDiv.setAttribute("id", "congrats");

const yourScore = () => {
  const correctAnswersDiv = document.getElementById("correct");
  const correctDivResults = document.createElement("div");

  correctDivResults.innerHTML = ` 
  <h2>Correct</h2>
  <h3>${result}%</h3>   
  <p>${Number(result) / Number(multiplier)}/${index} questions</p>
  `;
  correctAnswersDiv.appendChild(correctDivResults);
  console.log(correctDivResults);

  const wrongAnswersDiv = document.getElementById("wrong");
  const wrongDivResults = document.createElement("div");

  wrongDivResults.innerHTML = ` 
  <h2>Wrong</h2>
  <h3>${100 - result}%</h3>
  <p>${index - (Number(result) / Number(multiplier))}/${index} questions</p>
  `;
  wrongAnswersDiv.appendChild(wrongDivResults);
  console.log(wrongDivResults);

  const coloredCircle = document.getElementsByClassName("circle")[0];
  coloredCircle.style.background = `conic-gradient(#d20094 ${
    100 - result
  }%, #00ffff 0)`;
};

const congratsYouPassed = function () {
  if (result >= Number(scoreToPass)) {
    congratsDiv.innerHTML = `
    <h4>Congratulations!</h4>
    <h5>You passed the exam</h5>
    <p>
    We'll send you the certificate in few minutes. <br />
    Check your email (including promotions / spam folder)
    </p>
    `;
  } else if (scoreToPass === '70') {
    congratsDiv.innerHTML = `<h4 class= "lost">Oh no!</h4> <a class="linkazzo" href ="quiz/quiz-hard.html">Try again</a>`;
    console.log(congratsDiv);
  } else if (scoreToPass === '60') {
    congratsDiv.innerHTML = `<h4 class= "lost">Oh no!</h4> <a class="linkazzo" href ="quiz/quiz-medium.html">Try again</a>`;
    console.log(congratsDiv);
  } else if (scoreToPass === '50') {
    congratsDiv.innerHTML = `<h4 class= "lost">Oh no!</h4> <a class="linkazzo" href ="quiz/quiz-easy.html">Try again</a>`;
    console.log(congratsDiv);
  }
  yourScore();

  innerCircle.appendChild(congratsDiv);
};

congratsYouPassed(result);
localStorage.clear();

const myLinkazzo = document.getElementsByClassName("linkazzo")[0];
myLinkazzo.addEventListener("mouseover", function () {
  myLinkazzo.style.color = "#d20094";
});

myLinkazzo.addEventListener("mouseout", function () {
  myLinkazzo.style.color = "aliceblue";
});
