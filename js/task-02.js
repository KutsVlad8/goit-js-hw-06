const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('#ingredients');

// console.log(ingredientsRef);

const ingredientsArr = ingredients.map(ingredient => {
  // console.log(ingredient);
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
  return listItem;
});

ingredientsRef.append(...ingredientsArr);
