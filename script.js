const hamburger = document.getElementById('open-when-clicking');
const menu_section = document.getElementById('menu-section');
const close_menu = document.querySelector('.close-image');


hamburger.addEventListener('click', () => {
    menu_section.style.display = 'block';
});

close_menu.addEventListener('click', () => {
    menu_section.style.display = 'none'
});


const button1 = document.querySelector('.slide-button-1');
const button2 = document.querySelector('.slide-button-2');

const left_side = document.querySelector('.left-side-and-play-button');
const right_side = document.querySelector('.right-side');


button1.addEventListener("click", () => {
    button1.src = "./img/slide-button-1.svg";
    button2.src = "./img/slide-button2.svg"

    left_side.style.display = 'block';
    right_side.style.display = 'none';

})

button2.addEventListener("click", () => {
    button2.src = "./img/slide-button-1.svg";
    button1.src = "./img/slide-button2.svg"
    left_side.style.display = 'none';
    right_side.style.display = 'flex';


})