'use strict';

const contactForm = document.querySelector('.contact-form');
const iframe = contactForm.querySelector('#hidden_iframe');
const submitButton = contactForm.querySelector('.form-submit-button');
const inputs = [...contactForm.querySelectorAll('input, textarea')];
const altOption = document.querySelector('.alt-contact-option');

function hide(item) {
    item.style.display = 'none';
}

function forbidEvent(event) {
    event.preventDefault();
}

iframe.onload = function () {
    if (submitted) {
        submitButton.classList.remove('unsent-message');
        submitButton.classList.add('sent-message');
        submitButton.textContent = 'Спасибо, я скоро вам отвечу';
        submitButton.addEventListener('click', forbidEvent);
        inputs.forEach(hide);
        hide(altOption)
    }
}
