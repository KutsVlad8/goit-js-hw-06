const bodyRef = document.body;
const textColorRef = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

// console.dir(bodyRef.style);
// console.log(textColorRef.textContent);
// console.log(changeColorBtn);

changeColorBtn.addEventListener('click', onChangeColorBody);

function onChangeColorBody() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textColorRef.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
