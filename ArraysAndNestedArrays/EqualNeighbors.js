function solve(matrix){
    let foundPairs = [];
    for(let i = 0; i < matrix.length -1; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == matrix[i+1][j]){
                foundPairs.push(matrix[i][j]);
            }
        }
    }
    for(let i = 0; i < matrix.length; i++){
        for(let k = 0; k < matrix[i].length - 1; k++){
            if(matrix[i][k] == matrix[i][k+1]){
                foundPairs.push(matrix[i][k]);
            }
    }
}
return foundPairs.length;
}
solve([['2', '2', '5', '7','4'],
['4', '0', '5', '3','4'],
['2', '5', '5', '4','2']]
);