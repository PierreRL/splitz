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

    let minutes = Math.floor((totalSeconds - 3600 * hours) / 60);

    let seconds = totalSeconds - (60 * minutes) - (3600 * hours);

    if (round) {
        seconds = Math.round(seconds);
    }
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }
    return { hours: hours, minutes: minutes, seconds: seconds };
}
export function getTimeFromSecsWithoutHours(totalSeconds: number, round: boolean): Time {
    let minutes = Math.floor(totalSeconds / 60);

    let seconds = totalSeconds - (60 * minutes);

    if (round) {
        seconds = Math.round(seconds);
    }
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }
    return { hours: 0, minutes: minutes, seconds: seconds };
}
function roundTime(time: Time): Time {
    return { hours: Math.round(time.hours), minutes: Math.round(time.minutes), seconds: Math.round(time.seconds) };
}
export function roundToTwo(num: number): number {
    const m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

