<template>
  <div>
    Distance {{ distance }} <input type="number" v-model="distance" /> <br />
    Time {{ dtime.minutes }} : {{ dtime.seconds }}
    <input
      type="number"
      v-model="dtime.minutes"
    />
    :
    <input
      type="number"
      v-model="dtime.seconds"
      min="0"
      max="59"
    />
    <br />
    Pace {{ dpace.minutes }} : {{ dpace.seconds }} min/km
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  distance = 0;

  get dtime(): StringTime {
    return {
      minutes: this.time.minutes.toString(),
      seconds: this.time.seconds.toString(),
    };
  }
  set dtime(stringTime : StringTime) {
    console.log(stringTime);

    this.time.minutes = parseInt(stringTime.minutes);
    this.time.seconds = parseInt(stringTime.seconds);
  }
  get dpace(): StringTime {
    return {
      minutes: this.pace.minutes.toString(),
      seconds: this.pace.seconds.toString(),
    };
  }
  p_time: Time = { minutes: 0, seconds: 0 };
  get time(): Time {
    return this.p_time;
  }
  set time(time: Time) {
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
  }
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
interface StringTime {
  minutes: string;
  seconds: string;
}
</script>
