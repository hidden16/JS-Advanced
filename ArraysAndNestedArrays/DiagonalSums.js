function solve(matrix){
    let sum = 0
    let result = '';
    let j = 0;
    for(let i = 0; i < matrix.length; i++){
        sum += Number(matrix[i][j])
        j++;
    }
        result += sum + ' ';
        sum = 0;
    for(let i = 0; i < matrix.length; i++){
        j = matrix[i].length - 1 - i;

        sum += Number(matrix[i][j])
    }
    result += sum;
    console.log(result);
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );