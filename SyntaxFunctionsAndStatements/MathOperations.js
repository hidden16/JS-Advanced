function calculate(numberOne, numberTwo, operator){
    let result = null;
    switch(operator){
        case '+':
            result = numberOne + numberTwo;
        break;
        case '-':
            result = numberOne - numberTwo;
        break;
        case '*':
            result = numberOne * numberTwo;
        break;
        case '/':
            result = numberOne / numberTwo;
        break
        case '**':
            result = numberOne ** numberTwo;
        break;
        case '%':
            result = numberOne % numberTwo;
        break;
    }
    console.log(result);
}

function calculateWithEval(numberOne, numberTwo, operator){
    const operators = ['+','-','*','/','%','**'];
    if(operators.includes(operator)){
        let result = eval(`${numberOne}${operator}${numberTwo}`);
        console.log(result);
    }
}


let num1 = 3;
let num2 = 5.5;
let operator = '*';

calculate(num1,num2,operator);
calculateWithEval(num1,num2,operator);
