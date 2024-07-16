// Напишіть функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.
const applyCallbackToEachElement = (arr, callback) => { 
    return arr.map(callback);
} 
const arr = [1, 2, 3, 4, 5]; 
const squareCallback = (num) => num * num; 
const result = applyCallbackToEachElement(arr, squareCallback); 
console.log(result); // [1, 4, 9, 16, 25] 



// 2. Розрахунок дисконтної ціни 
// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек. 
const calculateDiscountedPrice = (price, discount, callback) => {
    const discountPrice = price * (1 - discount / 100);
    callback(discountPrice);
}; 
const showDiscountedPrice = (discountPrice) => {
    console.log(`price with discount ${discountPrice} `);
}; 
calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90 