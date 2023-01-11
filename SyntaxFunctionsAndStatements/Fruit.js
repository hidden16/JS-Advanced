function fruitCalculator(fruit, weight, priceForKilogram){
    let weightInKilos = weight / 1000;
    let moneyNeeded = weightInKilos * priceForKilogram;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`)   
}

let param1 = 'orange';
let param2 = 2500;
let param3 = 1.80;

fruitCalculator(param1,param2,param3);