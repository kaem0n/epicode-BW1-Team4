const result = localStorage.getItem('result')
console.log('result', result)
const innerCircle = document.getElementById("inside-circle");
const congratsDiv = document.createElement("div");

congratsDiv.setAttribute("id", "congrats");

const yourScore = () => {
  const correctAnswersDiv = document.getElementById("correct");
  const correctDivResults = document.createElement("div");

  correctDivResults.innerHTML = ` 
  <h2>Correct</h2>
  <h3>${result}%</h3>   
  <p>${result / 10}/10 questions</p>
  `;
  correctAnswersDiv.appendChild(correctDivResults);
  console.log(correctDivResults);

  const wrongAnswersDiv = document.getElementById("wrong");
  const wrongDivResults = document.createElement("div");

  wrongDivResults.innerHTML = ` 
  <h2>Wrong</h2>
  <h3>${100 - result}%</h3>
  <p>${(100 - result) / 10}/10 questions</p>
  `;
  wrongAnswersDiv.appendChild(wrongDivResults);
  console.log(wrongDivResults);

  const coloredCircle = document.getElementsByClassName("circle")[0];
  coloredCircle.style.background = `conic-gradient(#d20094 ${
    100 - result
  }%, #00ffff 0)`;
};

const congratsYouPassed = function () {
  if (result >= 60) {
    congratsDiv.innerHTML = `
    <h4>Congratulations!</h4>
    <h5>You passed the exam</h5>
    <p>
    We'll send you the certificate in few minutes. <br />
    Check your email (including promotions / spam folder)
    </p>
    `;
  } else {
    congratsDiv.innerHTML = `<h4 class= "lost">Oh no! Try again</h4>`;
    console.log(congratsDiv);
  }
  yourScore();

  innerCircle.appendChild(congratsDiv);
};

congratsYouPassed(result);
localStorage.clear()