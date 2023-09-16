const hamburger = document.getElementById('open-when-clicking');
const menu_section = document.getElementById('menu-section');
const close_menu_button = document.querySelector('.close-image');
const header = document.querySelector('header');
const main_section = document.getElementById('main-section');
const body = document.querySelector('body');
const central_div = document.querySelector('.central-div');

function open_menu() {
    menu_section.style.display = 'block';

    // header.style.background = 'rgba(0, 0, 0, 0.80)';


    // main_section.style.background = 'rgba(0, 0, 0, 0.8)';
    // central_div.style.opacity = 0.2
    ;

    // main_section.style.zIndex = 3;

    // central_div.style.background = 'rgba(0, 0, 0, 0.80)';


    body.style.overflow = 'hidden';
}


hamburger.addEventListener('click', open_menu)


function close_menu() {
    menu_section.style.display = 'none'


    // header.style.background = 'white';
    // main_section.style.background = '#EAF7FC';

    // central_div.style.background = 'white';


    body.style.overflow = 'auto';
}


close_menu_button.addEventListener('click', close_menu)


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


});

const slider_img = document.querySelector('.slider-img');
const next_ic = document.querySelector('.next-icon-img')
const prev_ic = document.querySelector('.prev-icon-img')


const lola_part1 = document.getElementById('lola-part1');
const lola_part2 = document.getElementById('lola-part2');
const lola_part3 = document.getElementById('lola-part3');
const lola_part4 = document.getElementById('lola-part4');


let images = [lola_part1, lola_part2, lola_part3, lola_part4];
let index = 0;

function Display() {
    images.map((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

function prev() {
    if (index === 0) {
        index = images.length - 1;
        // return index;
    } else {
        index--;
    }

    Display();

}

function next() {
    if (index === images.length - 1) {
        index = 0;
    } else {
        index++;
    }
    Display();
}

prev_ic.addEventListener("click", () => {
    prev();
})

next_ic.addEventListener("click", () => {
    next();

})
