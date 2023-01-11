function previousDay(year, month, day){
    const date = new Date(year, month - 1, day - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}

let year = 2020;
let month = 1;
let day = 1;

previousDay(year, month, day);  