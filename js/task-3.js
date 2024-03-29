const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (event) => {
  const trimmedValue = event.target.value.trim();
  nameOutputEl.textContent = trimmedValue !== "" ? trimmedValue : 'Anonymous';
  return trimmedValue;
});

// ---------- REMARKS OF THE MENTOR ---------- //

// ✅ 3. Завдання вирішено правильно
// Проблему вирішено частково правильно, але є питання, які потребують уваги.

// task-3.js - Well executed moments/Добре виконані моменти //

// Непотрібне призначення: у зворотньому виклику слухача подій ви призначаете textContent елементу nameOutputEl до змінної input,
// що є непотрібним. Операцію призначення можна видалити, і ви можете встановити textContent безпосередньо.

// Надмірне використання тернарного оператора: Ви використовуєте тернарний оператор для виконання призначень в обох випадках,
// що є зайвим. Замість цього ви можете безпосередньо призначити результат тернарної операції до textContent.

// Логічна помилка з Trim: метод trim правильно використовується для видалення пробілів по краях, але ви ненавмисно використовуєте
// event.target.value без обрізання, коли встановлюєте nameOutputEl.textContent у випадку, якщо вхідна строка не є порожньою.
// Це означає, що якщо користувач набере пробіли на початку або в кінці свого імені, ці пробіли з'являться в елементі nameOutputEl.

// Задачу не прийнято через критичне питання. Будь ласка, ознайомтеся з відгуком, внесіть необхідні виправлення та надішліть
// задачу на повторне розгляд.
