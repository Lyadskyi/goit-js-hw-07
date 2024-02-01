const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (event) => {
  let input = (event.target.value.trim() !== "")
    ? nameOutputEl.textContent = event.target.value
    : nameOutputEl.textContent = 'Anonymous';
  return input;
});
