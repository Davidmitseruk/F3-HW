
// 1 + 2
// Отримуємо елементи
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');

// Функція для відкриття модального вікна
function openModal() {
  document.body.classList.add('show-modal');
}

// Функція для закриття модального вікна
function closeModal() {
  document.body.classList.remove('show-modal');
}

// Відкриваємо модалку по кліку на кнопку
openModalBtn.addEventListener('click', openModal);

// Закриваємо модалку по кліку на кнопку "Закрити"
closeModalBtn.addEventListener('click', closeModal);

// Закриваємо модалку по кліку на бекдроп
backdrop.addEventListener('click', (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
});


// 3
// Отримуємо всі радіобатони
const radioButtons = document.querySelectorAll('input[name="color"]');

// Функція для зміни кольору фону
function changeBackgroundColor(event) {
  document.body.style.backgroundColor = event.target.value;
}

// Додаємо слухач подій для кожного радіобатону
radioButtons.forEach(radio => {
  radio.addEventListener('change', changeBackgroundColor);
});

// Встановлюємо початковий колір фону відповідно до вибраного радіобатону
document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;