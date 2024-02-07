function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const buttonChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

const backgroundColorChange = () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
}

buttonChangeColorEl.addEventListener('click', backgroundColorChange);

// ---------- REMARKS OF THE MENTOR ---------- //

// ✅ 5. Завдання вирішено правильно
// Проблему вирішено правильно, з деякими можливостями для вдосконалення.

// task-5.js - Well executed moments/Добре виконані моменти //

// Хороше іменування змінних: Ваші змінні bodyEl, buttonChangeColorEl, spanColorEl та backgroundColorChange названо описово,
// що робить зрозумілим, для чого кожна змінна використовується.

// Форматування коду: код форматовано послідовно, з належним використанням переносів рядків та відступів, що робить код читабельним
// та зручним для розуміння.

// task-5.js - Improvement/Покращення //

// Непотрібні крапки з комою: Ви включили крапки з комою після оголошень функцій (function getRandomHexColor() { ... };) та після
// завершення виразу функції(const backgroundColorChange = () => { ... };). У JavaScript вони не потрібні і можуть бути видалені.

// Завдання прийнято з дрібними зауваженнями на покращення. Пам'ятайте, що в JavaScript оголошення функцій та вирази стрілочних
// функцій не вимагають крапки з комою після закриваючої фігурної дужки, якщо лише вони не використовуються у контексті,
// який специфічно вимагає крапок з комою. В цілому, відмінна робота!
