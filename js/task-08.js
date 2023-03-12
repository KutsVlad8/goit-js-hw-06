const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // console.log(event.currentTarget);

  const formData = {};
  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alertError();
  }

  formData.email = email.value;
  formData.password = password.value;

  console.log(formData);

  event.currentTarget.reset();
}

const alertError = () => {
  alert('Все поля должны быть заполнены');
};
