const textInputRef = document.querySelector('#name-input');
const changeNameRef = document.querySelector('#name-output');

// console.log(textInputRef);
// console.log(changeNameRef);

textInputRef.addEventListener(
  'input',
  event => (changeNameRef.textContent = event.currentTarget.value),
);
