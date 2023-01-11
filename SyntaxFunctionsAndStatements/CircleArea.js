function area(parameter){
    if(typeof(parameter) == 'number'){
        let area = parameter ** 2 * Math.PI;
        return console.log(area.toFixed(2));
    }
    return console.log(`We can not calculate the circle area, because we receive a ${typeof(parameter)}.`);
}

let param1 = 5;
let param2 = "aasd";

area(param1);
area(param2);