'use strict';
function stringLength(stringOne, stringTwo, stringThree){
    let stringTotalLength = stringOne.length + stringTwo.length + stringThree.length;
    let avgLength = stringTotalLength / 3;
    console.log(stringTotalLength);
    console.log(Math.floor(avgLength));
}

let string1 = 'chocolate';
let string2 = 'ice cream';
let string3 = 'cake';
stringLength(string1, string2, string3);
