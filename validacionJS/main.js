const form = document.getElementById('form');
const usuario = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
})

function checkInputs() {
  const usuarioValue = usuario.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  //usuario
  if (usuarioValue === "") {
    setErrorFor(usuario, "No puede dejar el usuario en blanco.");
  } else {
    setSuccesFor(usuario);
  }
  //email
  if (emailValue === "") {
    setErrorFor(email, "No puede dejar el usuario en blanco.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "No ingreso un email válido.");
  } else {
    setSuccesFor(email);
  }
  //contrasena
  if (passwordValue === "") {
    setErrorFor(password, "No puede dejar el usuario en blanco.");
  } else {
    setSuccesFor(password);
  }
  //contrasena 2
  if (password2Value === "") {
    setErrorFor(password2, "No puede dejar el usuario en blanco.");
  } else if(passwordValue !== password2Value){
    setErrorFor(password2, "Passwords no coinciden");
  } else {
    setSuccesFor(password2);
  }
}

//funcion de error
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

//funcion por si todo va bien
function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
    
//validaremos si es un email correcto
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}