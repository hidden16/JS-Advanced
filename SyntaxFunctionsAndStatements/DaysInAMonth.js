function daysInAMonth(month, year){
    let date = new Date(year, month, 0).getDate();
    console.log(date);
}

let date1 = 2;
let date2 = 2021;
daysInAMonth(date1, date2);