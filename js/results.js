const innerCircle = document.getElementById("inside-circle");
const congratsDiv = document.createElement("div");

congratsDiv.setAttribute("id", "congrats");

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

  innerCircle.appendChild(congratsDiv);
};

congratsYouPassed(60);

const correctAnswersDiv = document.getElementById("correct");
const correctDivResults = document.createElement("div");

correctDivResults.innerHTML = ` 
<h2>Correct</h2>
<h3>66.7%</h3>
<p>4/6 questions</p>
`;
correctAnswersDiv.appendChild(correctDivResults);
console.log(correctDivResults);

const wrongAnswersDiv = document.getElementById("wrong");
const wrongDivResults = document.createElement("div");

wrongDivResults.innerHTML = ` 
<h2>Wrong</h2>
<h3>33.3%</h3>
<p>2/6 questions</p>
`;
wrongAnswersDiv.appendChild(wrongDivResults);
console.log(wrongDivResults);
