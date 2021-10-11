
  const inputField = document.querySelectorAll('.booking-form--input');
  const errorFields = document.querySelectorAll('.validity');

  function clearContent(e) {
      if (e.target.value == 'Name' || e.target.value == 'E-mail' || e.target.value == 'Phone') {
          e.target.value = '';
      } else {
          errorFields.forEach(el => el.style.display = 'none');
          e.target.classList.remove('invalid');
      }
  }

  function validate(e) {
      if (!e.target.validity.valid || e.target.value == '') {
          if (e.target.id == 'valid-name') errorFields[0].style.display = 'inline';
          if (e.target.id == 'valid-email') errorFields[1].style.display = 'inline';
          if (e.target.id == 'valid-tel') errorFields[2].style.display = 'inline';
          e.target.classList.add('invalid');
      }
  }

  inputField.forEach(el => {
      el.addEventListener('focus', clearContent),
      el.addEventListener('blur', validate)
      

  });


  function telHandler (e)  {
    const value = e.target.value
    console.log(e.target.value);
    // if (e.target.value==`${/[^0-9,]/}`) console.log('hello')
    let res = /[^0-9]/g.test(e.target.value)
    if (res) {
      if (e.target.id == 'valid-name') errorFields[0].style.display = 'inline';
      if (e.target.id == 'valid-email') errorFields[1].style.display = 'inline';
      if (e.target.id == 'valid-tel') errorFields[2].style.display = 'inline';
      e.target.classList.add('invalid');
  }
    e.target.value = value.replace(/[^0-9 -]/g, '')
  }


  let telNumber = document.querySelector('.booking-form__tel')
  telNumber.addEventListener('input', telHandler)
