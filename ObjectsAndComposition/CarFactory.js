function solve(object) {
    let result = {};
    result.model = object.model;

    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };

    if (object.power <= 104) {
        result.engine = smallEngine;
    } else if (object.power <= 159) {
        result.engine = normalEngine;
    } else {
        result.engine = monsterEngine;
    }

    const carriage = { type: object.carriage, color: object.color };
    result.carriage = carriage;

    let wheels = [];
    if (Math.floor(object.wheelsize % 2) == 0) {
        object.wheelsize -= 1;
    }
    for (let i = 0; i < 4; i++) {
        wheels.push(object.wheelsize);
    }
    result.wheels = wheels;
    return result;
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));