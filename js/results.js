const innerCircle = document.getElementById("inside-circle");
const congratsDiv = document.createElement("div");

congratsDiv.setAttribute("id", "congrats");

const yourScore = (n) => {
  const correctAnswersDiv = document.getElementById("correct");
  const correctDivResults = document.createElement("div");

  correctDivResults.innerHTML = ` 
  <h2>Correct</h2>
  <h3>${n}%</h3>   
  <p>${n / 10}/10 questions</p>
  `;
  correctAnswersDiv.appendChild(correctDivResults);
  console.log(correctDivResults);

  const wrongAnswersDiv = document.getElementById("wrong");
  const wrongDivResults = document.createElement("div");

  wrongDivResults.innerHTML = ` 
  <h2>Wrong</h2>
  <h3>${100 - n}%</h3>
  <p>${(100 - n) / 10}/10 questions</p>
  `;
  wrongAnswersDiv.appendChild(wrongDivResults);
  console.log(wrongDivResults);

  const coloredCircle = document.getElementsByClassName("circle")[0];
  coloredCircle.style.background = `conic-gradient(#d20094 ${
    100 - n
  }%, #00ffff 0)`;
};

const congratsYouPassed = function (n) {
  if (n >= 60) {
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
  yourScore(n);

  innerCircle.appendChild(congratsDiv);
};

congratsYouPassed(80);
