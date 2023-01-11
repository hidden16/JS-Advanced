function walkTime(steps, stepLength, kmh){
    let lengthInMeters = steps * stepLength;
    let breakTime = Math.floor(lengthInMeters / 500);
    let speedInMetersPerSecond = kmh / 3.6;

    let time = (lengthInMeters / speedInMetersPerSecond);

    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - (minutes * 60));
    let hours = Math.floor(time / 3600);
    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + breakTime < 10 ? "0" : "") + (minutes + breakTime) + ":" + (seconds < 10 ? "0" : "") + seconds);
}

walkTime(4000, 0.60, 5);