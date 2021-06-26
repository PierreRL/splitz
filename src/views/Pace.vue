<template>
  <div class="pace bounding-box">
    <h1>Calculate Pace</h1>
    <div class="calculator-wrapper" id="pace-calculator-wrapper">
      <span class="label-selector">Pace</span>
      <PaceOutput
        :paceMinutes="paceMinutes"
        :paceSeconds="paceSeconds"
        :paceHours="paceHours"
        v-bind:unit="paceUnit"
        v-on:updateUnit="paceUnit = +$event"
      ></PaceOutput>
      <span class="label-selector space-above-mobile">Distance</span>
      <DistanceSelector
        v-on:updateDistance="distance = +$event"
        v-bind:distance="distance"
        v-bind:unit="distanceUnit"
        v-on:updateUnit="distanceUnit = +$event"
      >
      </DistanceSelector>
      <span class="label-selector space-above-mobile">Time</span>
      <TimeSelector
        v-on:updateSeconds="timeSeconds = +$event"
        v-bind:timeSeconds="timeSeconds"
        v-on:updateMinutes="timeMinutes = +$event"
        v-bind:timeMinutes="timeMinutes"
        v-on:updateHours="timeHours = +$event"
        v-bind:timeHours="timeHours"
      ></TimeSelector>
    </div>
  </div>
</template>
<style lang="scss">
@import "../styles/variables";
</style>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TimeSelector from "../components/TimeSelector.vue";
import DistanceSelector from "../components/DistanceSelector.vue";
import PaceOutput from "../components/PaceOutput.vue";
import { Time } from "../models/time";
import * as timeUtil from "../models/time";
@Options({
  components: { TimeSelector, DistanceSelector, PaceOutput },
})
export default class Home extends Vue {
  distance = 0;
  distanceUnit = 1;
  paceUnit = 1;

  private time: Time = { hours: 0, minutes: 0, seconds: 0 };
  private get pace(): Time {
    if (this.distance == 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    const totalSecondsTime =
      this.time.hours * 3600 + this.time.minutes * 60 + this.time.seconds;
    const totalDistance = this.distance * this.distanceUnit;
    const totalPace = (totalSecondsTime / totalDistance) * this.paceUnit;

    return timeUtil.getTimeFromSecs(totalPace, true);
  }

  get timeMinutes(): number {
    return this.time.minutes;
  }
  set timeMinutes(timeMinutes: number) {
    if (timeMinutes < 60 && timeMinutes >= 0) {
      this.time.minutes = timeMinutes;
    } else {
      this.time.minutes = 59;
    }
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
  get timeHours(): number {
    return this.time.hours;
  }
  set timeHours(timeHours: number) {
    this.time.hours = timeHours;
  }
  get paceMinutes(): number {
    return this.pace.minutes;
  }
  get paceSeconds(): number {
    return this.pace.seconds;
  }
  get paceHours(): number {
    return this.pace.hours;
  }
}
</script>
