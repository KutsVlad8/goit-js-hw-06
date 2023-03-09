const textInputRef = document.querySelector('#validation-input');

console.dir(textInputRef);

textInputRef.addEventListener('blur', () => {
  if (textInputRef.length <= 6) {
    textInputRef.style.borderColor = 'tomato';
  }

  return (textInputRef.style.borderColor = 'green');
});
