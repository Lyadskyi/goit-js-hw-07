const categoriesEl = document.querySelector('#categories');
const categoriesListItemEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesListItemEl.length}`);

categoriesListItemEl.forEach((item) => {
  const titleElement = item.querySelector('h2').textContent;
  const quantityElements = item.querySelectorAll('.list-items').length;

  console.log(`Category: ${titleElement}`);
  console.log(`Elements: ${quantityElements}`);
});

// ---------- REMARKS OF THE MENTOR ---------- //

// ✅ 1. Завдання вирішено правильно

// task-1.js - Well executed moments/Добре виконані моменти //

// Ви правильно вибрали список категорій, використовуючи document.querySelector('#categories'), а потім знайшли всі елементи .item
// з categoriesEl.querySelectorAll('.item').

// Гарне використання шаблонних рядків для виведення інформації, що робить код більш читабельним.

// Іменування змінних є дескриптивним, тому код легший для розуміння (categoriesEl, categoriesListItemEl, titleElement,
// quantityElements).

// task-1.js - Improvement/Покращення //

// У такому рядку коду const quantityElements = item.querySelectorAll('li').length;, ви вибираєте всі елементи li у кожній категорії.
// Однак це також включає до підрахунку h2, що не відповідає задуму завдання. Вам слід специфічно вибирати елементи li,
// які розташовані у підсписку (тобто ul), щоб отримати правильну кількість елементів категорії.

// Рекомендується використовувати const для змінних, які не переприсвоюються після їх первісного оголошення.
// Добра практика в декларуванні змінних!
