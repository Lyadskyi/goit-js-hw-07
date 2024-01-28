const categoriesEl = document.querySelector('#categories');
const categoriesListItemEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesListItemEl.length}`);

categoriesListItemEl.forEach((item) => {
  const titleElement = item.querySelector('h2').textContent;
  const quantityElements = item.querySelectorAll('li').length;

  console.log(`Category: ${titleElement}`);
  console.log(`Elements: ${quantityElements}`);
});
