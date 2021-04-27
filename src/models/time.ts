export interface Time {
    hours: number,
    minutes: number;
    seconds: number;
}

export function addTimes(time1: Time, time2: Time, round: boolean): Time {
    const time1Secs: number = 60 * time1.minutes + time1.seconds;
    const time2Secs: number = 60 * time2.minutes + time2.seconds;
    const totalSecs = time1Secs + time2Secs;
    return getTimeFromSecs(totalSecs, round);
}

export function getTimeFromSecs(totalSeconds: number, round: boolean): Time {
    const hours = Math.floor(totalSeconds / 3600)
    console.log(hours);
    let minutes = Math.floor((totalSeconds - 3600 * hours) / 60);
    console.log(minutes);
    let seconds = totalSeconds - (60 * minutes) - (3600 * hours);
    console.log(seconds);
    if (round) {
        seconds = Math.round(seconds);
    }
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }
    return { hours: hours, minutes: minutes, seconds: seconds };
}
function roundTime(time: Time): Time {
    return { hours: Math.round(time.hours), minutes: Math.round(time.minutes), seconds: Math.round(time.seconds) };
}

