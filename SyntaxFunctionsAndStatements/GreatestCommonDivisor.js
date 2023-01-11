function greatestCommonDivisor(num1, num2){
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    let result = Math.min(num1, num2);
    while (result > 0) {
        if (num1 % result == 0 && num2 % result == 0) {
            console.log(result);
            break;
        }
        result--;
    }
}

let num1 = 2514;
let num2 = -458;

greatestCommonDivisor(num1, num2);