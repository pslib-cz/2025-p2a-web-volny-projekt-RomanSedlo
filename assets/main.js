import '/src/style.css';

document.querySelector(".menu__button").addEventListener('click', () => {
    document.querySelector(".nav--primary").classList.toggle("visible")
    document.querySelector(".menu__button").classList.toggle("menu__button--visible")
})