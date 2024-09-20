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