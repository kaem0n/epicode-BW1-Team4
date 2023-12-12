document.addEventListener("DOMContentLoaded", function () {
  // Seleziona tutti gli elementi <img> con l'attributo alt uguale a "star" e itera su di essi
  document.querySelectorAll("img[alt='star']").forEach((star, index, stars) => {
    // Aggiunge un listener per l'evento di passaggio del mouse sulle stelline
    star.addEventListener("mouseover", function () {
      // Aggiunge la classe 'hover' a tutte le stelle fino a quella corrente
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("hover");
      }
    });

    // Aggiunge un listener per l'evento di uscita del mouse dalle stelline
    star.addEventListener("mouseout", function () {
      // Rimuove la classe 'hover' da tutte le stelle quando il mouse esce
      stars.forEach((s) => s.classList.remove("hover"));
    });

    // Aggiunge un listener per l'evento di click sulle stelline
    star.addEventListener("click", function () {
      // Rimuove la classe 'active' da tutte le stelle.
      stars.forEach((s) => s.classList.remove("active"));

      // Aggiunge la classe 'active' alla stella cliccata e alle stelle precedenti
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("active");
      }
    });
  });

  const feedbackForm = document.querySelector("form");
  const moreInfoButton = document.querySelector(".more-info-link");

  moreInfoButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Reindirizza a results.html
    window.location.href = "./results.html";
  });
});
