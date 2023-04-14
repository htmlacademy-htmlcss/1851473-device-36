// закрытие/открытие модального окна

let rareBtn = document.querySelector('.rare-btn');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__btn-close');

function openModal() {
  modal.classList.remove('modal--close');
}
rareBtn.addEventListener('click', openModal);


function closeModal() {
  modal.classList.add('modal--close');
}
modalClose.addEventListener('click', closeModal);

// счетчик в модальном окне

let plusBtn = modal.querySelector('.form-delivery__number-btn--plus');
let minusBtn = modal.querySelector('.form-delivery__number-btn--minus');
let counterInput = document.getElementById('number');

plusBtn.addEventListener('click', function() {
  counterInput.value = +counterInput.value + 1;
});

minusBtn.addEventListener('click', function() {
  counterInput.value = +counterInput.value - 1;
});
