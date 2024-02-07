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

// ---------- REMARKS OF THE MENTOR ---------- //

// ✅ 4. Завдання вирішено правильно

// task-4.js - Well executed moments/Добре виконані моменти //

// Гарне іменування змінних: використання inputEmail та inputPassword чітко описує, що ці змінні представляють.

// Обробник події для подання форми: Ви правильно додали обробник події до форми для обробки події подання.

// Запобігання перезавантаженню сторінки: використання event.preventDefault() у функції formHandler є правильним і успішно запобігає
// перезавантаженню сторінки при поданні форми.

// Перевірка даних форми: Ви реалізували логіку перевірки, чи поля email та password порожні, відображаючи попередження в такому
// випадку. Це відповідає вимогам завдання.

// Створення об'єкта даних та логування у консоль: inputObj з усуненими пробілами у значеннях email та password правильно
// структурований та залогований у консолі.

// Очищення форми: Ви відповідно використали formEl.reset(), щоб очистити форму після обробки.
