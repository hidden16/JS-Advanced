function solve(array){
    let towns = [];
    for (const items of array) {
        const[townName, productName, productPrice] = items.split(' | ');
        towns.push({townName, productName, productPrice});
    }
    let result = [];
    for (const items of towns) {
       let sameProductsPrice = towns.filter(x=>x.productName == items.productName).map(x=>x.productPrice);
       let minProductPrice = Math.min.apply(null,sameProductsPrice);
       let item = towns.find(x=>x.productPrice == minProductPrice && x.productName == items.productName);
        if(!result.includes(item)){
            result.push(item);
            console.log(`${item.productName} -> ${Number(item.productPrice)} (${item.townName})`);
        }
    }
}

solve([
'Sample Town | Orange | 3',
'Sofia | Orange | 3']
);