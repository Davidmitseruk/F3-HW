//1
const arr = [1, 2, 3];
arr[1] = 10;
console.table(arr);

//2
const arrtwo = ['first', 'second', 'third'];
arrtwo[3] = 'four';
console.table(arrtwo);

//3
const arrSum = [4, 10, 5, 6];
let sum = 0;
for(let i = 0; i < arrSum.length; i++){
    sum += arrSum[i];
}
console.log(arrSum);

//4
const arr4 = [1, 8, 7, 3, 5];
for( let i = 0; i < arr4.length; i++){
    console.log(arr4[i]);
}

//5

const string = ['hello', 'Javascript', 'goiteens', 'hi', 'monday'];
for (let i = 0; i < string.length; i++){
    if(string[i].length < 5){
        continue;
    }
    console.log(string[i]);
}

//6

const arr6 = [20, 8, 25, 28, 60, 77, 500, 58, 128, 22];
let max = arr6[0];
for(let i = 0; i < arr6.length; i++){
    if (arr6[i] > max){
        max = arr6[i];
    }
}
console.log(max);

//7
const arr7 = [20, 8, 25, 28, 60, 77, 500, 58, 128, 22];
for (let i = 0; i < arr7.length; i++){
    if (arr7[i] % 2 === 0){
        console.log(arr7[i]);
    }
}