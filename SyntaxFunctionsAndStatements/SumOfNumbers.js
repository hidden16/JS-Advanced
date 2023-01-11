function sumOfNumbers(n, m){
    let numOne = Number(n);
    let numTwo = Number(m);
    let result = 0;
    for(let i = numOne; i <= numTwo; i++){
        result += i;
    }
    console.log(result);
}

let num1 = '-8';
let num2 = '20';
sumOfNumbers(num1,num2);