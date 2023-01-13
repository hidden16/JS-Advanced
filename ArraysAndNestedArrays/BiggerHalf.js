function solve(array){
    return array.sort((a,b) => a-b).slice(Math.floor(array.length / 2));
}
solve([4, 7, 2, 5]);