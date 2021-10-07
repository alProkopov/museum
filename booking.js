
//
const bookingWindow = document.querySelector('.booking-form')
const bookingOverlay = document.querySelector('.booking-form__overlay')
const bookingWindowOpenBtn = document.querySelector('.tickets-buy')
const bookingWindowCloseBtn = document.querySelector('.booking-form__closeButton')

bookingWindowOpenBtn.addEventListener('click', function () {
  bookingWindow.classList.add('booking-form-active')
  bookingOverlay.classList.add('booking-form__overlay-active')
})

bookingWindowCloseBtn.addEventListener('click', function() {
  bookingWindow.classList.remove('booking-form-active')
  bookingOverlay.classList.remove('booking-form__overlay-active')
})

bookingOverlay.addEventListener('click', function() {
  bookingWindow.classList.remove('booking-form-active')
  bookingOverlay.classList.remove('booking-form__overlay-active')
})
