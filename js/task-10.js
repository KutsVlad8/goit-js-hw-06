const controlsDivRef = document.querySelector('#controls');
const inputRef = document.querySelector('input');
// const inputRef = controlsDivRef.firstChild;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

console.log(controlsDivRef);
console.log(inputRef);
console.log(createBtn);
console.log(destroyBtn);
console.log(boxesRef);

inputRef.addEventListener('input', onChangeInput);

function onChangeInput(event) {
  console.dir(event.currentTarget.value);
}

createBtn.addEventListener('click', onCreateBoxes);

function onCreateBoxes() {
  console.log('Vlad');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
