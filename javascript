// script.js
const hero = document.querySelector('.hero-section');

hero.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;
    const { clientWidth, clientHeight } = hero;

    const xPos = (offsetX / clientWidth) - 0.5;
    const yPos = (offsetY / clientHeight) - 0.5;

    hero.style.transform = `rotateX(${yPos * 10}deg) rotateY(${xPos * 10}deg)`;
});

hero.addEventListener('mouseleave', () => {
    hero.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
