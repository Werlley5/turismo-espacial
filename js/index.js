const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.mobile-cont');

hamburger.addEventListener('click', () => {
container.classList.toggle('show-menu')
});