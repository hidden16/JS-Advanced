function solve(array){
    let number = 0;
    let result = [];
    for(let i = 0; i < array.length; i++){
        number+=1;
        if(array[i] == 'add'){
            result.push(Number(number));
        }
        else{
            result.pop();
        }
    }
    if(result.length == 0){
        return console.log('Empty');
    }
    console.log(result.join('\n'));
}
solve(['add', 
'add', 
'add', 
'add']
);
solve(['add', 
'add', 
'remove', 
'add', 
'add']
);
solve(['remove', 
'remove', 
'remove']
);
