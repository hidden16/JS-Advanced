function solve(array){
    let matrix = [];
    for(let i = 0; i < array.length; i++){
        let matrixCreator = [];
        const splittedArray = array[i].split(' ');
        for(let k = 0; k < splittedArray.length; k++){
            matrixCreator.push(splittedArray[k]);
        }
        matrix.push(matrixCreator);
    }
    let diagonalOneSum = 0;
    let diagonalTwoSum = 0;
    let diagonalSaver = [];
    for(let i = 0; i < matrix.length; i++){
        diagonalOneSum += Number(matrix[i][i]);
        diagonalSaver.push(Number(matrix[i][i]));
    }
    let indexator = matrix.length - 1;
    for(let i = 0; i < matrix.length; i++){
        diagonalTwoSum += Number(matrix[i][indexator]);
        diagonalSaver.push(Number(matrix[i][indexator]));
        indexator--;
    }
    if(diagonalOneSum == diagonalTwoSum){
        for(let i = 0; i < matrix.length; i++){
            for(let k = 0; k < matrix[i].length; k++){
                matrix[i][k] = diagonalOneSum;
            }
            matrix[i][i] = diagonalSaver.shift();
        }
        let indexator = matrix.length - 1;
        for(let i = 0; i < matrix.length; i++){
            matrix[i][indexator] = diagonalSaver.shift();
            indexator--;
        }
        printMatrix(matrix);
    }
    else{
        printMatrix(matrix);
    }
    function printMatrix(matrix){
        for(let i = 0; i < matrix.length; i++){
            console.log(matrix[i].join(' '));
        }
    }
}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);