'use strict'

let buttonNavEl = document.querySelector('.header__button');
let navEl = document.querySelector('.header__nav');
let buttonCloseEl = document.querySelector('.header__close');
buttonNavEl.addEventListener('click', function () {
    if (navEl.style.display == 'block') {
        navEl.style.display = ('');
    } else {
        navEl.style.display = ('block');
    }
});
buttonCloseEl.addEventListener('click', function () {
    navEl.style.display = ('');
});