const textInputRef = document.querySelector('#name-input');
const changeNameRef = document.querySelector('#name-output');

console.dir(textInputRef);
// console.log(changeNameRef);

textInputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    changeNameRef.textContent = 'Anonymous';
  }
  changeNameRef.textContent = event.currentTarget.value;
}
