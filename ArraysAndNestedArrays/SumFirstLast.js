function solve(array){
    let sum = 0;
    if(array.length == 1){
        return sum = array[0] * 2;
    }
    return sum = Number(array.shift()) + Number(array.pop());
}
solve(['20', '30', '40']);
solve(['5', '10']);