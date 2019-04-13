document.getElementById('name').addEventListener('blur', validateName),
document.getElementById('zip').addEventListener('blur', validateZip),
document.getElementById('email').addEventListener('blur', validateEmail),
document.getElementById('phone').addEventListener('blur', validatePhone)

function validateName() {
  const name = document.getElementById('name')
  const regEx = /^[a-bA-z]{6,15}( [a-zA-Z]{1,6})?$/

  if (!regEx.test(name.value)){
    name.classList.add('is-invalid')
  }else {
    name.classList.remove('is-invalid')
  }
}

function validateZip() {
  const zip = document.getElementById('zip')
  const regEx = /^[0-9]{5}(-[0-9]{4})?$/

  if (!regEx.test(zip.value)){
    zip.classList.add('is-invalid')
  }else {
    zip.classList.remove('is-invalid')
  }
}

function validateEmail() {
  const email = document.getElementById('email')
  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!regEx.test(email.value)){
    email.classList.add('is-invalid')
  }else {
    email.classList.remove('is-invalid')
  }
}

function validatePhone () {
  const phone = document.getElementById('phone')
  const regEx = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!regEx.test(phone.value)){
    phone.classList.add('is-invalid')
  }else {
    phone.classList.remove('is-invalid')
  }
}