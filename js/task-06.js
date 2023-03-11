const textInputRef = document.querySelector('#validation-input');
const inputLength = Number(textInputRef.dataset.length);

console.log(inputLength);
console.log(textInputRef.value.length);

textInputRef.addEventListener('blur', () => {
  if (textInputRef.value.length >= inputLength) {
    textInputRef.classList.add('valid');
    textInputRef.classList.remove('invalid');
  } else {
    textInputRef.classList.add('invalid');
    textInputRef.classList.remove('valid');
  }
});
