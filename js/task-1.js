const categoriesArray = document.querySelectorAll('li.item');

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

console.log(`Number of categories: ${categoriesArray.length}`);

// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

categoriesArray.forEach(category => {
  const categoryNameText = category.querySelector('h2').textContent;
  const categoryContentArray = category.querySelectorAll('li.item li');
  console.log(
    `Category: ${categoryNameText}\nElements: ${categoryContentArray.length}`
  );
});
