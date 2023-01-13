function solve(array){
    let result = [];
    let biggestNum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] >= biggestNum){
            biggestNum = array[i];
            result.push(array[i]);
        }
    }
    return result;
}