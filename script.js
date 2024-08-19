// script.js
document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const hamsterImage = document.getElementById('hamsterImage');
    const scoreDisplay = document.getElementById('score');

    let score = 0;

    // Обработчик клика по кнопке
    clickButton.addEventListener('click', () => {
        score++;
        score++;
        updateScore();
    });

    // Обработчик клика по изображению
    hamsterImage.addEventListener('click', () => {
        score++;
        updateScore();
    });

    // Функция обновления счета
    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;
    }
});
