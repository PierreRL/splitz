<template>
  <div class="splits">
    Distance {{ distance }} <input type="number" v-model="distance" /> <br />
    Time {{ timeMinutes }} : {{ timeSeconds }}
    <TimeSelector
      v-on:updateSeconds="timeSeconds = $event"
      v-bind:timeSeconds="timeSeconds"
      v-on:updateMinutes="timeMinutes = $event"
      v-bind:timeMinutes="timeMinutes"
    ></TimeSelector>
    <br />
    Pace {{ paceMinutes }} : {{ paceSeconds }} min/km
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TimeSelector from "../components/TimeSelector.vue";
import { Split } from "../models/split";
import * as timeImp from "../models/time";
import { Time } from "../models/time";
@Options({
  components: { TimeSelector },
})
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
    return timeImp.getTimeFromSecs(totalPace, true);
    /*     const paceMinutes = Math.floor(totalPace / 60);
    const paceSeconds = totalPace - 60 * paceMinutes;
    const roundedMins = Math.round(paceMinutes);
    const roundedSeconds = Math.round(paceSeconds);
    return { minutes: roundedMins, seconds: roundedSeconds }; */
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
}
</script>
