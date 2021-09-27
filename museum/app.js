//WELCOME SLIDER

let offset=0;
let buttons = document.querySelectorAll('.slider-button')

document.querySelector('.slider-arrow-next').addEventListener('click', function(){
  offset=offset + 1000;
  if (offset>4000) offset=0
  document.querySelector('.slider-list').style.right = offset +'px'
  document.querySelector('.shadow').style.left = offset +'px'

  console.log(offset)
  compare(offset)

})

document.querySelector('.slider-arrow-prev').addEventListener('click', function(){
  offset=offset - 1000;
  if (offset==-1000) offset=4000
  console.log(offset)
  document.querySelector('.slider-list').style.right = offset +'px'
  document.querySelector('.shadow').style.left = offset +'px'

  compare(offset)

})

document.querySelector('.slider-buttons-list').addEventListener('click', function(e){

  if(e.target.classList.contains('slider-button1')){ offset= 0;
    document.querySelector('.slider-list').style.right = offset +'px'
    document.querySelector('.shadow').style.left = offset +'px' }
  if(e.target.classList.contains('slider-button2')){ offset= 1000
    document.querySelector('.slider-list').style.right = offset +'px'
    document.querySelector('.shadow').style.left = offset +'px'}
  if(e.target.classList.contains('slider-button3')){ offset= 2000
    document.querySelector('.slider-list').style.right = offset +'px'
    document.querySelector('.shadow').style.left = offset +'px'}
  if(e.target.classList.contains('slider-button4')){ offset= 3000
    document.querySelector('.slider-list').style.right = offset +'px'
    document.querySelector('.shadow').style.left = offset +'px'}
  if(e.target.classList.contains('slider-button5')){ offset= 4000
    document.querySelector('.slider-list').style.right = offset +'px'
    document.querySelector('.shadow').style.left = offset +'px'}

  compare(offset)

})

function compare(offset) {
  if (offset==0) {document.querySelector('.slider-button1').classList.add('active')
  document.querySelector('.slider-number-current').textContent = '01'
  document.querySelector('.slider-button2').classList.remove('active')
  document.querySelector('.slider-button3').classList.remove('active')
  document.querySelector('.slider-button4').classList.remove('active')
  document.querySelector('.slider-button5').classList.remove('active')
}

if (offset==1000) {console.log('1000')
document.querySelector('.slider-number-current').textContent = '02'
document.querySelector('.slider-button1').classList.remove('active')
  document.querySelector('.slider-button2').classList.add('active')
  document.querySelector('.slider-button3').classList.remove('active')
  document.querySelector('.slider-button4').classList.remove('active')
  document.querySelector('.slider-button5').classList.remove('active')
}

if (offset==2000) {console.log('1000')
document.querySelector('.slider-number-current').textContent = '03'
document.querySelector('.slider-button1').classList.remove('active')
  document.querySelector('.slider-button2').classList.remove('active')
  document.querySelector('.slider-button3').classList.add('active')
  document.querySelector('.slider-button4').classList.remove('active')
  document.querySelector('.slider-button5').classList.remove('active')
}

if (offset==3000) {console.log('1000')
document.querySelector('.slider-number-current').textContent = '04'
document.querySelector('.slider-button1').classList.remove('active')
  document.querySelector('.slider-button2').classList.remove('active')
  document.querySelector('.slider-button3').classList.remove('active')
  document.querySelector('.slider-button4').classList.add('active')
  document.querySelector('.slider-button5').classList.remove('active')
}

if (offset==4000) {console.log('1000')
document.querySelector('.slider-number-current').textContent = '05'
document.querySelector('.slider-button1').classList.remove('active')
  document.querySelector('.slider-button2').classList.remove('active')
  document.querySelector('.slider-button3').classList.remove('active')
  document.querySelector('.slider-button4').classList.remove('active')
  document.querySelector('.slider-button5').classList.add('active')
}
}


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
