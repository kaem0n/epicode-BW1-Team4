const easyDifficulty = document.getElementById('easy')
const mediumDifficulty = document.getElementById('medium')
const hardDifficulty = document.getElementById('hard')
const form = document.getElementById('main-form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (easyDifficulty.checked) {
        window.location.href = "./quiz/quiz-easy.html";
    } else if (mediumDifficulty.checked) {
        window.location.href = "./quiz/quiz-medium.html";
    } else if (hardDifficulty.checked) {
        window.location.href = "./quiz/quiz-hard.html";
    }
})