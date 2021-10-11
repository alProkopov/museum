//
const bookingWindow = document.querySelector(".booking-form");
const bookingOverlay = document.querySelector(".booking-form__overlay");
const bookingWindowOpenBtn = document.querySelector(".tickets-buy");
const bookingWindowCloseBtn = document.querySelector(
  ".booking-form__closeButton"
);

bookingWindowOpenBtn.addEventListener("click", function () {
  bookingWindow.classList.add("booking-form-active");
  bookingOverlay.classList.add("booking-form__overlay-active");
});

bookingWindowCloseBtn.addEventListener("click", function () {
  bookingWindow.classList.remove("booking-form-active");
  bookingOverlay.classList.remove("booking-form__overlay-active");
});

bookingOverlay.addEventListener("click", function () {
  bookingWindow.classList.remove("booking-form-active");
  bookingOverlay.classList.remove("booking-form__overlay-active");
});

//form

function getData(params) {


  //button
  let plus_minus_button = document.querySelectorAll('.entry-ticket__button')
  plus_minus_button.forEach(item=>item.addEventListener('click', setLocal))

  //select
  let selectButton = document.querySelector('.booking-form__select') //выбор типа билета
  selectButton.addEventListener('change', setLocal)
  let selectTimeButton = document.querySelector('.booking-form__time')
  selectTimeButton.addEventListener('change', setLocal)


  //количество билетов

  const inputBasic_form = document.querySelector(".value_basic_form");
  const inputSenior_form = document.querySelector(".value_senior_form");

  const inputBasic_form_right = document.querySelector( ".booking-form__totallist__input-basic");
  const inputSenior_form_right = document.querySelector(".booking-form__totallist__input-senior");

  //стоимость билетов(текст)
  const ticketCostBasic = document.querySelectorAll('.ticket-cost-basic')
  const ticketCostSenior = document.querySelectorAll('.ticket-cost-senior')

  const allBasicCost = document.querySelector('.all-basic-cost')
  const allSeniorCost = document.querySelector('.all-senior-cost')

  const totalCost = document.querySelector('.ticket-total-cost')

  // тип билета
  let checked = document.querySelector('.booking-form__select-items:checked')
  let ticketTypeItem = document.querySelectorAll('.booking-form__select-items1')


  //время
  let checkedTime = document.querySelector('.booking-form__select-time-item:checked')

  //дата справа
  let textDate = document.querySelector('.booking-form__overview-date')
  //выбор даты
  let checkedDate = document.querySelector('.booking-form__date')
  checkedDate.addEventListener('change', GetDate)

  //правая форма
  //тип билета
const ticketType = document.querySelector('.booking-form__overview-type')
ticketType.textContent = `${checked.text}`
//время
let ticketTime = document.querySelector('.booking-form__overview-time')
ticketTime.textContent = `${checkedTime.text}`

  // const checked = document.querySelector('.booking-form__select-items:selected')


  //listenerts


  function setLocal () {
  let checked = document.querySelector('.booking-form__select-items:checked')
  let checkedTime = document.querySelector('.booking-form__select-time-item:checked')


  inputBasic_form_right.value = inputBasic_form.value
  inputSenior_form_right.value = inputSenior_form.value
  let sum = inputBasic_form.value*checked.value+inputSenior_form.value*(checked.value/2)
  totalCost.textContent = `${sum}`
  ticketCostBasic.forEach(item=>item.textContent = `${checked.value}`)
  ticketCostSenior.forEach(item=>item.textContent = `${checked.value/2}`)

  allBasicCost.textContent = `${checked.value*inputBasic_form.value}`
  allSeniorCost.textContent = `${checked.value/2*inputSenior_form.value}`

  ticketType.textContent = `${checked.text}`
  ticketTime.textContent = `${checkedTime.text}`




  localStorage.setItem('ticket-type-id', checked.dataset.id);
  localStorage.setItem('basicNumber', inputBasic_form.value);
  localStorage.setItem('seniorNumber', inputSenior_form.value);
  localStorage.setItem('sum', sum);
  }


  function checkLocal(params) {


    localStorage.getItem('ticket-type-id')? ticketTypeItem[localStorage.getItem('ticket-type-id')].selected =true :''
    ticketType.textContent = `${ticketTypeItem[localStorage.getItem('ticket-type-id')].text}`


    localStorage.getItem('basicNumber')?inputBasic_form.value = localStorage.getItem('basicNumber'): inputBasic_form.value=0
    localStorage.getItem('seniorNumber')?inputSenior_form.value = localStorage.getItem('seniorNumber'): inputSenior_form.value=0

    inputBasic_form_right.value = inputBasic_form.value
    inputSenior_form_right.value = inputSenior_form.value




    localStorage.getItem('sum')?totalCost.textContent = localStorage.getItem('sum'):totalCost.textContent = 0


    setLocal()
  }





  function GetDate(params) {


    function getWeekDay(date) {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[date.getDay()];
    }

    function getMonth(date) {
      let months = ['January', 'February', 'March ', 'April', 'May', 'June', 'July', 'August','September','October', "November", 'December'];
      return months[date.getMonth()];
    }

    let date = new Date(document.querySelector('.booking-form__date').valueAsDate); // 3 января 2014 года

    let result = `${getWeekDay(date)}, ${getMonth(date)} ${date.getDate()}`

    textDate.textContent = result

  }
  checkLocal()





}





bookingWindowOpenBtn.addEventListener("click", getData)





$(document).ready(function(){

  $(".booking-form__date").focus( function() {
      $(this).attr({type: 'date'});
    });
  })
