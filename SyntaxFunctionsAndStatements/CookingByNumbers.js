function cook(number, cmdOne, cmdTwo, cmdThree, cmdFour, cmdFive){
    const commands = [cmdOne, cmdTwo, cmdThree, cmdFour, cmdFive];
    for(let i = 0; i < commands.length; i++){
        switch(commands[i]){
            case 'chop':
                number = number/2;
                console.log(number);
            break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
            break;
            case 'spice':
                number += 1;
                console.log(number);
            break;
            case 'bake':
                number *= 3;
                console.log(number);
            break;
            case 'fillet':
                number *= 0.8;
                console.log(number);
            break;
        }
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');