<template>
  <div class="splits bounding-box">
    <h1>Calculate Splits</h1>
    <div class="calculator-wrapper">
      <span class="label-selector">Distance</span>
      <DistanceSelector
        v-on:updateDistance="distance = +$event"
        v-bind:distance="distance"
        v-bind:unit="distanceUnit"
        v-on:updateUnit="distanceUnit = +$event"
      >
      </DistanceSelector>
      <span class="label-selector space-above">Time</span>
      <TimeSelector
        v-on:updateSeconds="timeSeconds = +$event"
        v-bind:timeSeconds="timeSeconds"
        v-on:updateMinutes="timeMinutes = +$event"
        v-bind:timeMinutes="timeMinutes"
        v-on:updateHours="timeHours = +$event"
        v-bind:timeHours="timeHours"
        class="space-above"
      ></TimeSelector>
      <span class="or-text">or</span>
      <span class="label-selector">Pace</span>
      <PaceSelector
        :paceMinutes="paceMinutes"
        v-on:updateMinutes="paceMinutes = +$event"
        :paceSeconds="paceSeconds"
        v-on:updateSeconds="paceSeconds = +$event"
        v-bind:unit="paceUnit"
        v-on:updateUnit="paceUnit = +$event"
      ></PaceSelector>

      <span class="label-selector space-above">Split Every</span>
      <SplitSelector
        v-on:updateSplitDistance="splitDistance = +$event"
        v-bind:distance="splitDistance"
        v-bind:unit="splitUnit"
        v-on:updateSplitUnit="splitUnit = +$event"
        class="space-above"
      >
      </SplitSelector>
    </div>
  </div>
  <br />
  <div class="bounding-box space-above">
    <span class="split-output">
      <span v-if="splitPace.hours != 0">{{ splitPace.hours }} : </span
      >{{ splitPaceMinutesString }} : {{ splitPaceSecondsString }}</span
    >
    <br /><span class="split-distance-output">
      / {{ splitDistance }} {{ splitUnitString }}</span
    >
  </div>
</template>
<style lang="scss">
@import "../styles/variables";
.split-output {
  font-size: 3rem;
  font-weight: 300;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.split-distance-output {
  font-size: 1.5rem;
  font-weight: 300;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.or-text {
  font-style: italic;
  font-size: 1.3rem;
  padding: 4px;
  grid-column: 1 / span 2;
}
.calculator-wrapper {
  row-gap: 0;
}
.space-above {
  margin-top: 35px;
}
.label-selector {
  align-self: flex-start;
}
</style>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TimeSelector from "../components/TimeSelector.vue";
import DistanceSelector from "../components/DistanceSelector.vue";
import SplitSelector from "../components/SplitSelector.vue";
import PaceSelector from "../components/PaceSelector.vue";
import { Time } from "../models/time";
import * as timeUtil from "../models/time";
import { distanceUnits } from "../models/units";
@Options({
  components: { TimeSelector, DistanceSelector, PaceSelector, SplitSelector },
})
export default class Home extends Vue {
  private priv_distance = 0;
  private priv_distanceUnit = 1 / 1000;
  private priv_paceUnit = 1;

  private priv_splitDistance = 0;
  private priv_splitUnit = 1 / 1000;

  get splitUnitString() {
    return Object.keys(distanceUnits).find(
      (key) => distanceUnits[key] == this.splitUnit
    );
  }
  get splitDistance() {
    return this.priv_splitDistance;
  }

  set splitDistance(splitDistance: number) {
    this.priv_splitDistance = splitDistance;
    this.updateSplitpace();
  }
  get splitUnit() {
    return this.priv_splitUnit;
  }

  set splitUnit(splitUnit: number) {
    this.priv_splitUnit = splitUnit;
    this.updateSplitpace();
  }

  get splitPaceSecondsString(): string {
    if (this.splitPace.seconds >= -9 && this.splitPace.seconds <= 9) {
      return "0" + this.splitPace.seconds.toString();
    }
    return this.splitPace.seconds.toString();
  }
  get splitPaceMinutesString(): string {
    if (this.splitPace.hours == 0) {
      return this.splitPace.minutes.toString();
    } else if (this.splitPace.minutes >= -9 && this.splitPace.minutes <= 9) {
      return "0" + this.splitPace.minutes.toString();
    }
    return this.splitPace.minutes.toString();
  }

  splitPace: Time = { hours: 0, minutes: 0, seconds: 0 };

  private time: Time = { hours: 0, minutes: 0, seconds: 0 };
  private pace: Time = { hours: 0, minutes: 0, seconds: 0 };

  get distance() {
    return this.priv_distance;
  }
  set distance(distance: number) {
    this.priv_distance = distance;
    this.updatePace();
  }

  get distanceUnit() {
    return this.priv_distanceUnit;
  }

  set distanceUnit(distanceUnit: number) {
    this.priv_distanceUnit = distanceUnit;
    this.updatePace();
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
    this.updatePace();
  }
  get paceUnit() {
    return this.priv_paceUnit;
  }
  set paceUnit(paceUnit: number) {
    this.priv_paceUnit = paceUnit;
    this.updateTime();
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
    this.updatePace();
  }
  get timeHours(): number {
    return this.time.hours;
  }
  set timeHours(timeHours: number) {
    this.time.hours = timeHours;
    this.updatePace();
  }
  get paceSeconds(): number {
    return this.pace.seconds;
  }
  set paceSeconds(paceSeconds: number) {
    this.pace.seconds = paceSeconds;
    this.updateTime();
  }
  get paceMinutes(): number {
    return this.pace.minutes;
  }
  set paceMinutes(paceMinutes: number) {
    this.pace.minutes = paceMinutes;
    this.updateTime();
  }
  /*   get paceHours(): number {
    return this.pace.hours;
  }
  set paceHours(paceHours: number) {
    this.pace.hours = paceHours;
  } */

  updatePace() {
    if (this.distance == 0) {
      this.pace = timeUtil.getTimeFromSecsWithoutHours(0, true);
      return;
    }
    const totalSecondsTime =
      this.time.hours * 3600 + this.time.minutes * 60 + this.time.seconds;
    const totalDistance = this.distance * this.distanceUnit;
    const totalPace = (totalSecondsTime / totalDistance) * this.paceUnit;

    this.pace = timeUtil.getTimeFromSecsWithoutHours(totalPace, true);
    this.updateSplitpace();
  }
  updateTime() {
    const totalDistance = this.distance * this.distanceUnit;
    const totalPace =
      (this.pace.hours * 3600 + this.pace.minutes * 60 + this.pace.seconds) /
      this.paceUnit;

    const totalSecondsTime = totalPace * totalDistance;
    console.log(totalSecondsTime);
    this.time = timeUtil.getTimeFromSecs(totalSecondsTime, true);
    this.updateSplitpace();
  }

  updateSplitpace() {
    const totalPace =
      (this.pace.hours * 3600 + this.pace.minutes * 60 + this.pace.seconds) /
      this.paceUnit;

    const totalSplitTime = totalPace * (this.splitDistance * this.splitUnit);

    this.splitPace = timeUtil.getTimeFromSecs(totalSplitTime, true);
  }
}
</script>
