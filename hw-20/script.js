document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery .image');
  const fullImageContainer = document.querySelector('.full-image-container');
  const fullImage = document.querySelector('.full-image');
  let currentIndex = -1;

  // Функція для відкриття повноекранного перегляду зображення
  function openFullScreen(index) {
    if (index >= 0 && index < images.length) {
      currentIndex = index;
      fullImage.src = images[currentIndex].src;
      fullImageContainer.style.display = 'flex';
    }
  }

  // Функція для закриття повноекранного перегляду зображення
  function closeFullScreen() {
    fullImageContainer.style.display = 'none';
    currentIndex = -1;
  }

  // Функція для переходу до наступного зображення
  function showNextImage() {
    if (currentIndex < images.length - 1) {
      openFullScreen(currentIndex + 1);
    }
  }

  // Функція для переходу до попереднього зображення
  function showPrevImage() {
    if (currentIndex > 0) {
      openFullScreen(currentIndex - 1);
    }
  }

  // Додавання обробника події до кожного зображення
  images.forEach((image, index) => {
    image.addEventListener('click', () => openFullScreen(index));
  });

  // Додавання обробника події для закриття повноекранного перегляду
  fullImageContainer.addEventListener('click', closeFullScreen);

  // Обробка подій клавіатури для перемикання зображень
  document.addEventListener('keydown', (event) => {
    if (currentIndex !== -1) { // Перевіряємо, чи є зображення відкритим
      if (event.key === 'ArrowRight') {
        showNextImage();
      } else if (event.key === 'ArrowLeft') {
        showPrevImage();
      } else if (event.key === 'Escape') {
        closeFullScreen();
      }
    }
  });
});

//2
document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input[type="number"]');
  const renderButton = controls.querySelector('button[data-action="render"]');
  const destroyButton = controls.querySelector('button[data-action="destroy"]');
  const boxesContainer = document.getElementById('boxes');

  // Функція для створення випадкового кольору
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return rgb(${r}, ${g}, ${b});
  }

  // Функція для створення div елементів
  function createBoxes(amount) {
    // Очистимо контейнер перед створенням нових елементів
    boxesContainer.innerHTML = '';

    let boxSize = 30; // Початковий розмір першого div

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = ${boxSize}px;
      box.style.height = ${boxSize}px;
      box.style.backgroundColor = getRandomColor();
      box.style.margin = '5px'; // Додатковий стиль для проміжку між div
      boxesContainer.appendChild(box);
      boxSize += 10; // Збільшення розміру для наступного div
    }
  }

  // Функція для очищення div#boxes
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  // Додавання обробників подій
  renderButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (amount > 0) {
      createBoxes(amount);
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);
});