const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('#ingredients');

// console.log(ingredientsRef);

// * ================================================================
const ingredientsArr = ingredients.map(ingredient => {
  console.log(ingredient);
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
  return listItem;
});

console.log(ingredientsArr);

ingredientsRef.append(...ingredientsArr);

// *  Сокращенный вариант========================================================

// ingredients.map(ingredient => {
// console.log(ingredient);
//   const listItem = document.createElement('li');
//   // listItem.classList.add('item');
//   listItem.className = 'item';
//   listItem.textContent = ingredient;
//   ingredientsRef.appendChild(listItem);
// });
