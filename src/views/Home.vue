<template>
  <div>
    Distance {{ distance }} <input type="number" v-model="distance" /> <br />
    Time {{ timeMinutes }} : {{ timeSeconds }}
    <input type="number" v-model="timeMinutes" />
    :
    <input type="number" v-model="timeSeconds" min="0" max="59" />
    <br />
    Pace {{ paceMinutes }} : {{ paceSeconds }} min/km
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  distance = 0;

  private time: Time = { minutes: 0, seconds: 0 };
  private get pace(): Time {
    if (this.distance == 0) {
      return { minutes: 0, seconds: 0 };
    }
    const totalSecondsTime = this.time.minutes * 60 + Number(this.time.seconds);
    const totalDistance = this.distance;
    const totalPace = totalSecondsTime / totalDistance;
    const paceMinutes = Math.floor(totalPace / 60);
    const paceSeconds = totalPace - 60 * paceMinutes;
    const roundedMins = Math.round(paceMinutes);
    const roundedSeconds = Math.round(paceSeconds);
    return { minutes: roundedMins, seconds: roundedSeconds };
  }

  get timeMinutes(): number {
    return this.time.minutes;
  }
  set timeMinutes(timeMinutes: number) {
    this.time.minutes = timeMinutes;
  }
  get timeSeconds(): number {
    return this.time.seconds;
  }
  set timeSeconds(timeSeconds: number) {
    if (timeSeconds < 60 && timeSeconds >= 0) {
      this.time.seconds = timeSeconds;
    } else {
      this.time.seconds = 59;
    }
  }
  get paceMinutes(): number {
    return this.pace.minutes;
  }
  get paceSeconds(): number {
    return this.pace.seconds;
  }

  /* p_time: Time = { minutes: 0, seconds: 0 };
  get time(): Time {
    console.log(this.p_time);
    return this.p_time;
  }
  set time(time: Time) {
    console.log(time.seconds);
    if (time.seconds >= 60 || time.seconds < 0 || time.minutes < 0) {
      return;
    } else {
      this.p_time = time;
    }
  }
  get pace(): Time {
    if (this.distance == 0) {
      return { minutes: 0, seconds: 0 };
    }
    const totalSecondsTime = this.time.minutes * 60 + Number(this.time.seconds);
    const totalDistance = this.distance;
    const totalPace = totalSecondsTime / totalDistance;
    const paceMinutes = Math.floor(totalPace / 60);
    const paceSeconds = totalPace - 60 * paceMinutes;
    const roundedMins = Math.round(paceMinutes);
    const roundedSeconds = Math.round(paceSeconds);
    return { minutes: roundedMins, seconds: roundedSeconds };
  } */
}

/* function padNumber2(number: number): string {
  let output : string = number + "";
  while (output.length < 2) {
    output = "0" + output;
  }
  return output;
} */
interface Time {
  minutes: number;
  seconds: number;
}
/* interface StringTime {
  minutes: string;
  seconds: string;
} */
</script>
