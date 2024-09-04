const fieldValueOne = document.querySelector("#textOne");
const buttonOne = document.querySelector("#changeBtnOne");
buttonOne.onclick = () => {
  buttonOne.textContent = fieldValueOne.value;
};

// 2
const imgTwo = document.querySelector("#imgTwo");
imgTwo.src ="Forrest.jpg";
imgTwo.style.width = '400px';

// 3
const imgThree = document.querySelector("#imgThree");
imgThree.alt ="cat2";
imgThree.style.width = "400px";
console.log(imgThree);

// 4
let counterValue = 0;
const valueElement = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
function increment() {
  counterValue += 1; // Збільшення значення на 1
  updateUI()}; // Оновлення інтерфейсу
  function decrement() {
    counterValue -= 1; // Зменшення значення на 1
    updateUI(); // Оновлення інтерфейсу
  }
  function updateUI() {
    valueElement.textContent = counterValue; // Встановлення нового значення в елементі span
  }
  incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);