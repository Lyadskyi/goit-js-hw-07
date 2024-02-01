const formEl = document.querySelector('.login-form');

function formHandler(event) {
  event.preventDefault();
  
  const inputEmail = formEl.elements.email;
  const inputPassword = formEl.elements.password;
  
  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    alert('All form fields must be filled in');
  } else {
    const inputObj = {
      email: inputEmail.value.trim(),
      password: inputPassword.value.trim(),
    };
    console.log(inputObj);
    formEl.reset();
  }
};

formEl.addEventListener('submit', formHandler);
