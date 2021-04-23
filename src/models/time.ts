export interface Time {
    minutes: number;
    seconds: number;
}

export function addTimes(time1: Time, time2: Time, round: boolean): Time {
    let time1Secs: number = 60 * time1.minutes + time1.seconds;
    let time2Secs: number = 60 * time2.minutes + time2.seconds;
    let totalSecs = time1Secs + time2Secs;
    return getTimeFromSecs(totalSecs, round);
}

export function getTimeFromSecs(totalSeconds: number, round: boolean): Time {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - 60 * minutes;
    if (round) {
        seconds = Math.round(seconds);
    }
    return { minutes: minutes, seconds: seconds };
}
function roundTime(time: Time): Time {
    return { minutes: Math.round(time.minutes), seconds: Math.round(time.seconds) };
}

