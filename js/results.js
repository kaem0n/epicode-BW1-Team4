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
