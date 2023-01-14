function solve(matrix){
    let result = [];
    for(let i = 0; i < matrix.length - 1; i++){
        result.push(matrix[i].reduce((acc,currentNum) => acc + currentNum));
        result.push(matrix[i + 1].reduce((acc,currentNum) => acc + currentNum));
        let sumColOne = 0;
        let sumColTwo = 0;
        for(let j=0; j < matrix.length; j++){
            sumColOne += Number(matrix[i][j]);
            sumColTwo += Number(matrix[i + 1][j]);
        }
        result.push(sumColOne, sumColTwo);
    }
    console.log(result.every(x=>x == result[0]));
}

solve([[5, 5, 6],
    [10, 5, 4],
    [15, 5, 5]]
   );