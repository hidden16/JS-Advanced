function dayOfWeek(day){
    const weekDays = {"Monday":1,"Tuesday":2,"Wednesday":3,"Thursday":4,"Friday":5,"Saturday":6,"Sunday":7};
    for(weekDay in weekDays){
        if(weekDay == day){
            return console.log(weekDays[weekDay]);
        }
    }
    return console.log('error')
}

let day = 'Monday';

dayOfWeek(day);