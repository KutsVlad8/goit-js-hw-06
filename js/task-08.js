const form = document.querySelector('.login-form');
// console.dir(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // console.dir(event.currentTarget.elements);

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  if (email === '') {
    alertError();
  }
  const password = formElements.password.value;
  if (password === '') {
    alertError();
  }
  const formData = {
    email,
    password,
  };

  console.log(formData);

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //   console.log(name);
  //   console.log(value);
  // });
}

const alertError = function (element) {
  alert(`поле ${element} заполнены`);
};
