function radar(speed, area){
    let areaLimit = {'motorway': 130, 'interstate': 90, 'city': 50, 'residential': 20};
    speed = Math.abs(speed);
    if(areaLimit.hasOwnProperty(area)){
        if(speed <= areaLimit[area]){
            return console.log(`Driving ${speed} km/h in a ${areaLimit[area]} zone`);
        }
        let speedingLevel = Math.abs(areaLimit[area] - speed);
        let speedingMessage = '';
        if(speedingLevel <= 20){
            speedingMessage = "speeding";
        }
        else if(speedingLevel <= 40){
            speedingMessage = "excessive speeding";
        }
        else{
            speedingMessage = "reckless driving";
        }

        return console.log(`The speed is ${Math.abs(speed-areaLimit[area])} km/h faster than the allowed speed of ${areaLimit[area]} - ${speedingMessage}`);
    }
}

radar(40, 'residential');