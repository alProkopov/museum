// const button = document.querySelectorAll('.amount-button')

// const inputBasic = document.querySelector('.amount-value.basic')
// const inputSenior = document.querySelector('.amount-value.senior')

// const calculator = document.querySelector('.total-calculator')



// const ticketType = document.querySelector('.ticket-type-items')
// const ticketTypeItem = document.querySelectorAll('.ticket-type-items')


// let cost = 20
// let sum = 0
// let result = 0

// function whatChecked(e) {
//   if (e.target.checked){
//     console.log(e.target.value);
//     return cost = e.target.value
//   }
// }


// function volumeHandler(params) {
//   sum = inputBasic.value*cost+inputSenior.value*(cost/2)
//   result = calculator.textContent = `${sum}`
//   return result
// }







// button.forEach(el=>el.addEventListener('click', volumeHandler))

// ticketTypeItem.forEach(el=>el.addEventListener('click', whatChecked))


const button = document.querySelectorAll('.amount-button')

const inputBasic = document.querySelector('.amount-value.basic')
const inputSenior = document.querySelector('.amount-value.senior')

const calculator = document.querySelector('.total-calculator')



const ticketTypeItem = document.querySelectorAll('.ticket-type-radio')


function setLocal(params) {
  let checked = document.querySelector('.ticket-type-radio:checked')
  localStorage.setItem('ticket-type-id', checked.id);
  localStorage.setItem('basicNumber', inputBasic.value);
  localStorage.setItem('seniorNumber', inputSenior.value);
  let sum = inputBasic.value*checked.value+inputSenior.value*(checked.value/2)
  calculator.textContent = `${sum}`
  localStorage.setItem('sum', sum);
}
console.log(ticketTypeItem);
function checkLocal(params) {
  localStorage.getItem('ticket-type-id')? ticketTypeItem[localStorage.getItem('ticket-type-id')].checked =true :''
  localStorage.getItem('basicNumber')?inputBasic.value = localStorage.getItem('basicNumber'): inputBasic.value=0
  localStorage.getItem('seniorNumber')?inputSenior.value = localStorage.getItem('seniorNumber'): inputSenior.value=0
  localStorage.getItem('sum')?calculator.textContent = localStorage.getItem('sum'):calculator.textContent = 0


}


button.forEach(el=>el.addEventListener('click', setLocal))
ticketTypeItem.forEach(el=>el.addEventListener('click', setLocal))


document.addEventListener('DOMContentLoaded', checkLocal);
