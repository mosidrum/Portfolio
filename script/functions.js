function showMenu() {
  var menu = document.getElementById('menu');
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}

function closeMenu () {
  var menu = document.getElementById('menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}

function validateEmail(email){
  var email = document.getElementById("email").value;
  const msg = document.getElementById('textarea').value
  const name = document.getElementById('name').value
  const success = document.getElementById('success')
  const danger = document.getElementById('danger')
  
  if (email === String(email).toLowerCase() && email != ''){
    success.style.display = 'block'
  } else {
    danger.style.display = 'block'
    setTimeout(()=>{
      name ===''
      email ===''
      msg ===''
    },2000)
  }
  
}

const form = document.getElementById('form')

form.addEventListener('input', () => {
  const saveFormData = {
    fullname: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('textarea').value,
  }
  localStorage.setItem('saveFormData', JSON.stringify(saveFormData))
})

const parseFormData = JSON.parse(localStorage.getItem('saveFormData'))

if (parseFormData) {
  const fullname = document.getElementById('name')
  fullname.value = parseFormData.fullname
  const email = document.getElementById('email')
  email.value = parseFormData.email
  const message = document.getElementById('textarea')
  message.value = parseFormData.message
}