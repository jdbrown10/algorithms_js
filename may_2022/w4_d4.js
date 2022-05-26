//clock angles!!

/* 
Given a number of minutes past midnight, determine the angle between the hour and the minute hands at that point in time. Keep in mind that on an analog clock, the hour hand is not perfectly aligned with the number hour. 
e.g., at 4:45, the hour hand is 3/4 of the way between 4 and 5

*/

const clockAngles = (minutes) => {
    //get number of hours
    var hours = Math.floor(minutes/60);

    //if it's more than 12 or equal to 12 hours, subtract 12 until it's less than 12 hours
    while (hours >= 12) {
        hours -= 12;
    }

    //get remainder minutes (there can only be 0-59 minutes to determine any given angle on a clock, so modulo 60)
    var remainderMinutes = minutes % 60

    // return(hours + " hours, " + remainderMinutes + " minutes");
    //determine angle of hour hand (from 360)
    //multiply by 360 degrees and divide by 12, because there are 12 hours
    var hourAngle = hours / 12 * 360 

    //determine angle of minute hand (from 360)
    //multiply by 360 degrees and divide by 60, because there are 60 minutes
    var minuteAngle = remainderMinutes / 60 * 360 

    //subtract larger angle from smaller angle to get the difference
    if (hourAngle >= minuteAngle) {
        return hourAngle - minuteAngle + " degrees";
    }
    return minuteAngle - hourAngle + " degrees";
}

// console.log(clockAngles(360));
// console.log(clockAngles(180));
// console.log(clockAngles(210));
// console.log(clockAngles(33301));
// console.log(clockAngles(980));
// console.log(clockAngles(361));
// console.log(clockAngles(66));