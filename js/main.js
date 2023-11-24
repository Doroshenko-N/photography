// burger
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener('click', function () {
  nav.classList.toggle('nav--active')
  burger.classList.toggle('burger--active')
  document.body.classList.toggle('stop-scroll')
})

// call-form
const callFormBtn = document.getElementById('call-form')
const modalCallForm = document.getElementById('modal-call-form')

// открытие окна
callFormBtn.addEventListener('click', function () {
  modalCallForm.classList.add('modal-parent--open')
})

// закрытие окна
modalCallForm.querySelector('.modal').addEventListener('click', function (event) {
  event._isClick = true
})

modalCallForm.addEventListener('click', function (event) {
  if (event._isClick === true) return
  modalCallForm.classList.remove('modal-parent--open')
})

// закрытие окна при нажатии на Esc
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalCallForm.classList.remove('modal-parent--open')
  }
})

// Слайдер галерея
const swiper = new Swiper("#gallery", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,

  navigation: {
    prevEl: '#gallery-prev',
    nextEl: '#gallery-next',
  }
})

