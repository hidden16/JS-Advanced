function squareOfStars(number = 0){
    if(number == 0){
        for(let i = 0; i < 5; i++){
            console.log('* * * * *');
        }
    }
    let loopNumber = number;
    while(number !== 0){
        let stringBuilder = '';
        for(let i = 0; i < loopNumber; i++){
            stringBuilder += '* ';
        }
        console.log(stringBuilder);
        number--;
    }
}

squareOfStars(3);