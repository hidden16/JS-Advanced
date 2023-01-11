function sameNumbers(number){
    const string = number.toString();
    const array = new Array(string.length);
    let sum = 0;
    for(let i = 0; i < string.length; i++){
        array[i] = string[i];
        sum += Number(array[i]);
    }

    for(let i = 0; i < array.length - 1; i++){
        if(array[i] !== array[i + 1]){
            console.log(false);
            console.log(sum);
            return;
        }
    }
    console.log(true);
    console.log(sum);
}

let number = 2222222222;
sameNumbers(number);