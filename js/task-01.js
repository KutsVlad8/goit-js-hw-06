const categoriesRef = document.querySelector('#categories');
// console.log(categoriesRef);

const categoriesRefChild = categoriesRef.children;
console.log(`Number of categories: ${categoriesRefChild.length}`);

const itemRef = document.querySelectorAll('.item');
// console.log(itemRef);
itemRef.forEach(element => {
  // console.dir(element);
  const title = element.firstElementChild.textContent;
  console.log(`Category: ${title}`);

  const categoriesList = element.lastElementChild.children.length;
  console.log(`Elements ${categoriesList}`);
});
