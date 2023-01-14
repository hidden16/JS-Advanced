function solve(commands){
    let matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let turnCounter = 1;
    for(let i = 0; i < commands.length; i++){
        const splittedCommands = commands[i].split(' ');
        const row = splittedCommands[0];
        const col = splittedCommands[1];
        // movement layer
        if(turnCounter % 2 == 1){
            if(matrix[row][col] == 'X' || matrix[row][col] == 'O'){
                console.log('This place is already taken. Please choose another!');
                continue;
            }
            matrix[row][col] = 'X';
        }
        else{
            if(matrix[row][col] == 'X' || matrix[row][col] == 'O'){
                console.log('This place is already taken. Please choose another!');
                continue;
            }
            matrix[row][col] = 'O';
        }
        // winner check
        for(let k = 0; k < matrix.length; k++){
            var xPoints = [{name: 'X'}];
            var oPoints = [{name: 'O'}];
            // column check
            for(let j = 0; j < matrix[k].length; j++){
                if(matrix[k][j] == 'X'){
                    xPoints.push(matrix[k][j]);
                }
                else if(matrix[k][j] == 'O'){
                    oPoints.push(matrix[k][j]);
                }
            }
            if(pointsCheck(xPoints)) return printMatrix(matrix);
            if(pointsCheck(oPoints)) return printMatrix(matrix);
            xPoints.length = 1;
            oPoints.length = 1;
            //row check
            for(let y = 0; y < matrix.length; y++){
                if(matrix[y][k] == 'X'){
                    xPoints.push(matrix[y][k]);
                }
                else if(matrix[y][k] == 'O'){
                    oPoints.push(matrix[y][k]);
                }
            }
            if(pointsCheck(xPoints)) return printMatrix(matrix);
            if(pointsCheck(oPoints)) return printMatrix(matrix);
            xPoints.length = 1;
            oPoints.length = 1;
            //diagonal check
            for(let x = 0; x < matrix.length; x++){
                if(matrix[x][x] == 'X'){
                    xPoints.push(matrix[x][x]);
                }
                else if(matrix[x][x] == 'O'){
                    oPoints.push(matrix[x][x]);
                }
            }
            if(pointsCheck(xPoints)) return printMatrix(matrix);
            if(pointsCheck(oPoints)) return printMatrix(matrix);
            xPoints.length = 1;
            oPoints.length = 1;
            let indexator = 2;
            for(let z = 0; z < matrix.length; z++){
                if(matrix[z][indexator] == 'X'){
                    xPoints.push(matrix[z][indexator]);  
                }
                else if(matrix[z][indexator] == 'O'){
                    oPoints.push(matrix[z][indexator]);  
                }
                indexator--;
            }
            if(pointsCheck(xPoints)) return printMatrix(matrix);
            if(pointsCheck(oPoints)) return printMatrix(matrix);
            xPoints.length = 1;
            oPoints.length = 1;
        }

        // matrix condition layer
        if(!matrix[0].includes(false) && !matrix[1].includes(false) && !matrix[2].includes(false)){
            console.log('The game ended! Nobody wins :(');
            return printMatrix(matrix)
        }

        turnCounter++;
        function printMatrix(matrix){
            for(element of matrix){
                console.log(element.join('	'));
            }
        }
        function pointsCheck(array){
            if(array.length == 4){
                if(array[0].name == 'X'){
                    console.log('Player X wins!');
                    return true;
                }
                else if(array[0].name == 'O'){
                    console.log('Player O wins!');
                    return true;
                }
            }
            return false;
        }
    }
}
solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]

);