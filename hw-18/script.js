// 1

// Отримуємо список категорій
const categories = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log(`У списку ${categories.length} категорії.`);

// Проходимо кожен елемент li.item
categories.forEach(category => {
  // Отримуємо заголовок категорії
  const title = category.querySelector('h2').textContent;
  
  // Отримуємо кількість елементів в категорії
  const itemsCount = category.querySelectorAll('ul item').length;

  // Виводимо результат у консоль
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});

// 2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
  // Отримуємо список ul#ingredients
  const ingredientsList = document.querySelector('#ingredients');
  
  // Створюємо масив елементів li
  const items = ingredients.map(ingredient => {
    const li = document.createElement('li'); // Створюємо елемент li
    li.textContent = ingredient; // Додаємо текст в li
    return li; // Повертаємо елемент
  });
  
  // Вставляємо всі li в ul за одну операцію
  ingredientsList.append(...items);
