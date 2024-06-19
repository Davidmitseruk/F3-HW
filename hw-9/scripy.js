const logItems = function(array){
    for (let i = 0; i < array.length; i++){
        console.log(`${i + 1} - ${array[i]}`);
    }
}
logItems(['mango', 'poly', 'ajax', 'lux', 'jay', 'kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40,45, 50]);

//2
const calculateEngravingPrice = function (message, pricePerWord){
    const words = message.split(' ');
    const numberOfWords = words.length;
    const totalPrice = numberOfWords * pricePerWord;
    return totalPrice;
}
console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10
    )
)
console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20
    )
)
console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
)
console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
)

///////////// 3

const findLongestword = function(string){
    const words = string.split(' ');
    let longestWord = words[0];

    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord
}
console.log(findLongestword('my name is David and i Enjoy programing'));
console.log(findLongestword('Google do a roll'));
console.log(findLongestword('may the force be with you'));