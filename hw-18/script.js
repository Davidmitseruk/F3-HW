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

  //3

  const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  
  // Отримуємо список ul#gallery
  const gallery = document.querySelector('#gallery');
  
  // Створюємо розмітку для галереї за допомогою шаблонних рядків
  const galleryItems = images
    .map(image => {
      return <li class="gallery-item"><img src="${image.url}" alt="${image.alt}" class="gallery-image"></img></li>;
    })
    .join('');
  
  // Додаємо всю розмітку в DOM за одну операцію
  gallery.insertAdjacentHTML('beforeend', galleryItems);


  
  //4
  
// Початкове значення лічильника
let counterValue = 0;

// Отримуємо елементи кнопок та спан
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

// Функція для зменшення значення
const decrement = () => {
  counterValue -= 1;
  updateValue();
};

// Функція для збільшення значення
const increment = () => {
  counterValue += 1;
  updateValue();
};

// Функція для оновлення інтерфейсу
const updateValue = () => {
  valueEl.textContent = counterValue;
};

// Додаємо слухачі подій на кнопки
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
