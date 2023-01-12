function solve(words){
    const regex = /\w+/g;
    let result = words.match(regex);
    // also working
    //result = result.map((x) => x.toUpperCase());
    console.log(result.join(', ').toUpperCase());
}

solve('Hi, how are you?');
solve('hello');