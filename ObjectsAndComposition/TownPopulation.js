function solve(arrayOfStrings){
    const result = {};
    for(let string of arrayOfStrings){
        const [name, population] = string.split(' <-> ');

        if(name in result){
            result[name] += Number(population);
        } else{
            result[name] = Number(population);
        }
    }

    console.log(Object
        .entries(result)
        .map(([name, population]) => `${name} : ${population}`)
        .join('\n'));
    
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);