function largestNumber(numberOne, numberTwo, numberThree){
    const numbers = [numberOne, numberTwo, numberThree];
    numbers.sort(function(a,b){return b-a});
    console.log(`The largest number is ${numbers[0]}.`);
}

let num1 = 5;
let num2 = -3;
let num3 = 16;

largestNumber(num1,num2,num3);