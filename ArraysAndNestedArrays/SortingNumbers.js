function solve(array){
    let ascendingArray = array.sort((a,b) => a-b);
    let bigNumbers = (ascendingArray.splice(Math.floor(ascendingArray.length / 2))).reverse();
    let smallNumbers = (ascendingArray.splice(0, ascendingArray.length));
    let result = [];
    while(smallNumbers.length > 0 || bigNumbers.length > 0){
        if(smallNumbers.length !== 0){
            result.push(smallNumbers.shift());
        }
        if(bigNumbers.length !== 0){
            result.push(bigNumbers.shift());
        }
    }
    return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,22]);