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
const list = document.querySelector('#listFour');
const firstItem = list.firstElementChild;
firstItem.textContent = 'newTextContent'