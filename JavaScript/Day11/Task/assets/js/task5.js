const numbers = [10, 20, 30];

let newArray = [];

for (let b = 0; b < numbers.length; b++) {
    newArray[b] = numbers[b];
}

newArray[newArray.length] = 40;

console.log(newArray);