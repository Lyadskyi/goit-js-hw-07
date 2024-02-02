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
    inputEl.value = '';
  }
});

buttonDestroyEl.addEventListener('click', destroyBoxes);
