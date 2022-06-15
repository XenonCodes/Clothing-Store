'use strict'

//Lesson-8
/**
 * Функция создания разметки
 * @param {string} nameProduct  Название продукта
 * @param {number} priceValue  Цена продукта за 1шт.
 */
function renderingMrkup(nameProduct, priceValue) {
    let markup = `
        <ul class="basket-info__list">
                        <li class="basket-info__item name-product">${nameProduct.innerText}</li>
                        <li class="basket-info__item">1</li>
                        <li class="basket-info__item">$${priceValue.innerText}</li>
                        <li class="basket-info__item">$<span class="price-total">${priceValue.innerText}</span></li>
                    </ul>
                    <hr>
        `;
    basketInfoTextEl.insertAdjacentHTML('beforebegin', markup);
}

let collectionButtonProdEl = document.querySelectorAll('.products__button');
let basketIconEl = document.querySelector('.header__basket');
let totalPrice = document.querySelector('.basket-info__total');
let basketInfoTextEl = document.querySelector('.basket-info__text');

collectionButtonProdEl.forEach(button => {
    button.addEventListener('click', function (event) {
        basketIconEl.innerText = +basketIconEl.innerText + 1;
        basketIconEl.style.display = "block";
        event.target.value = +event.target.value + 1;
        let productPriceValue = event.target.parentElement.parentElement.querySelector('.products__price-num');
        let nameProduct = event.target.parentElement.parentElement.querySelector('.products__heading');
        totalPrice.innerText = (+totalPrice.innerText + +productPriceValue.innerText).toFixed(2);
        if (event.target.value < 2) {
            renderingMrkup(nameProduct, productPriceValue);
        } else {
            let nameProductEL = document.querySelectorAll('.name-product');
            nameProductEL.forEach(element => {
                if (element.innerText == nameProduct.innerText) {
                    let quantityEL = element.nextSibling.nextSibling;
                    quantityEL.innerText = +quantityEL.innerText + 1;
                    let priceTotal = element.parentNode.querySelector('.price-total');
                    priceTotal.innerText = (+productPriceValue.innerText * +quantityEL.innerText).toFixed(2);
                }
            });
        }
    })
});

//Закрытие-открытие меню навигации
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