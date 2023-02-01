function solve(array) {
    let result = [];
    for (const item of array) {
        let [product, price] = item.split(' : ');
        result[product] = Number(price);
    }
    let letter = [];
    const ordered = Object.keys(result).sort();
    for (let i = 0; i < ordered.length; i++) {
        let firstLetter = ordered[i].substring(0,1);
        if(!letter.includes(firstLetter)){
            letter.push(firstLetter);
            console.log(firstLetter);
        }
        console.log(`  ${ordered[i]}: ${result[ordered[i]]}`);
    }
}