// const counterRef = document.querySelector('#counter');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

// console.log(counterRef);
console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueRef);

let counterValue = 0;

const addIncrement = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
  console.log(counterValue);
};

const addDecrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
  console.log(counterValue);
};

incrementBtn.addEventListener('click', addIncrement);
decrementBtn.addEventListener('click', addDecrement);
