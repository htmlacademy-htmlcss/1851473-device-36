// закрытие/открытие модального окна

let rareBtn = document.querySelector('.rare-btn');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__btn-close');
let modalInputName = document.getElementById('name');

function openModal() {
  modal.classList.remove('modal--close');
  modalInputName.focus();

}
rareBtn.addEventListener('click', openModal);


function closeModal() {
  modal.classList.add('modal--close');
  rareBtn.focus();
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
  if(counterInput.value > 1) {
    counterInput.value = +counterInput.value - 1;

  } else {
    alert("Значение не должно быть меньше единицы")
  }
});

counterInput.addEventListener('change', function() {
  if(counterInput.value < 1) {
    counterInput.value = 1;
    alert("Значение не должно быть меньше единицы");
  }
})


// табы service

let activeBtns = document.querySelectorAll('.services__btn');
let serviceItems = document.querySelectorAll('.services__item');

for(let i = 0; i < activeBtns.length; i++) {
  activeBtns[i].addEventListener('click', function() {
    for(let j = 0; j < activeBtns.length; j++) {
      activeBtns[j].classList.remove('services__btn--active');
      serviceItems[j].classList.remove('services__item--active');
    }
    activeBtns[i].classList.add('services__btn--active');
    serviceItems[i].classList.add('services__item--active');
  })
}


// табы в слайдере

let sliderBtns = document.querySelectorAll('.slider__bullet');
let sliderItems = document.querySelectorAll('.slider__item');
let sliderNext = document.querySelector('.slider__arrow--next');
let sliderPrev = document.querySelector('.slider__arrow--prev');

sliderPrev.setAttribute('disabled', 'disabled');

for(let i = 0; i < sliderBtns.length; i++) {
  sliderBtns[i].addEventListener('click', function(){
    for(let j = 0; j < sliderBtns.length; j++) {
      sliderBtns[j].classList.remove('slider__bullet--active');
      sliderItems[j].classList.remove('slider__item--active');
    }
    sliderBtns[i].classList.add('slider__bullet--active');
    sliderItems[i].classList.add('slider__item--active');
    if (i == 0) {
      sliderPrev.setAttribute('disabled', 'disabled');
      sliderNext.removeAttribute('disabled');
    } else if (i == sliderBtns.length - 1) {
      sliderNext.setAttribute('disabled', 'disabled');
      sliderPrev.removeAttribute('disabled');
    } else {
      sliderPrev.removeAttribute('disabled');
      sliderNext.removeAttribute('disabled');
    }
  })
}


sliderNext.addEventListener('click', function(){
  let nextIndex;
  for(let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('slider__item--active')) {
      nextIndex = i + 1;
      sliderItems[i].classList.remove('slider__item--active');
      sliderBtns[i].classList.remove('slider__bullet--active');
      if (nextIndex == sliderItems.length - 1) {
        sliderNext.setAttribute('disabled', 'disabled');
      }
      console.log(nextIndex)
    }
  }
  sliderItems[nextIndex].classList.add('slider__item--active');
  sliderBtns[nextIndex].classList.add('slider__bullet--active');
  sliderPrev.removeAttribute('disabled');
})


sliderPrev.addEventListener('click', function(){
  let prevIndex;
  for(let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('slider__item--active')) {
      prevIndex = i - 1;
      sliderItems[i].classList.remove('slider__item--active');
      sliderBtns[i].classList.remove('slider__bullet--active');
      if (prevIndex == 0) {
        sliderPrev.setAttribute('disabled', 'disabled');
      }
    }
  }
  sliderItems[prevIndex].classList.add('slider__item--active');
  sliderBtns[prevIndex].classList.add('slider__bullet--active');
  sliderNext.removeAttribute('disabled');
})
