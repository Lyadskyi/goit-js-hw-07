function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;

    boxes.push(box);
  }

  divBoxesEl.append(...boxes);
};

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

buttonCreateEl.addEventListener('click', () => {
  const amount = Number(inputEl.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  }
});

buttonDestroyEl.addEventListener('click', destroyBoxes);

// ---------- REMARKS OF THE MENTOR ---------- //

// ✅ 6. Завдання вирішено правильно
// Проблему вирішено з незначним поліпшенням, яке потрібно внести.

// task-6.js - Well executed moments/Добре виконані моменти //

// Хороше форматування коду: код добре структурований і відформатований, що робить його зручним для читання та зрозумілим.

// Грамотне використання прослуховувачів подій: використання прослуховувачів подій на кнопках створення та видалення коректно
// відповідає завданню.

// task-6.js - Improvement/Покращення //

// Очищення попередніх блоків: перед додаванням нових блоків до divBoxesEl слід очистити всі існуючі елементи,
// згідно з вимогою завдання, що "попередні квадрати повинні бути повністю видалені і на їх місце додані нові".
// Це слід зробити у функції createBoxes.

// Очищення значення введення: Ви вірно очищаєте значення inputEl у прослуховувачі подій після перевірки кількості,
// що також слід зробити у функції createBoxes, як останній крок.

// Завдання прийнято з рекомендацією перемістити очищення значення inputEl у функцію createBoxes для зрозумілості та додати крок
// щодо очищення існуючих блоків перед додаванням нових, аби забезпечити видалення попередньої колекції згідно з інструкціями
// завдання.
