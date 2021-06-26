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
      <hr />
      <span class="label-selector">Time</span>
      <TimeSelector
        v-on:updateSeconds="timeSeconds = +$event"
        v-bind:timeSeconds="timeSeconds"
        v-on:updateMinutes="timeMinutes = +$event"
        v-bind:timeMinutes="timeMinutes"
        v-on:updateHours="timeHours = +$event"
        v-bind:timeHours="timeHours"
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
      <hr />
      <span class="label-selector">Split Every</span>
      <SplitSelector
        v-on:updateSplitDistance="splitDistance = +$event"
        v-bind:distance="splitDistance"
        v-bind:unit="splitUnit"
        v-on:updateSplitUnit="splitUnit = +$event"
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
      per {{ splitDistance }} {{ splitUnitString }}</span
    >
  </div>
  <br />
  <div class="space-above">
    <table v-if="!tableHasTooManyRows">
      <tr>
        <th>Total Distance ({{ splitUnitString }})</th>
        <th>Total Time</th>
      </tr>
      <tr v-for="(distance, index) in distArray" :key="distance">
        <td>{{ distance }}</td>
        <td>
          <span v-if="timeArray[index].hours != 0"
            >{{ timeArray[index].hours }} : </span
          ><span
            v-if="timeArray[index].minutes != 0 || timeArray[index].hours != 0"
            >{{
              stringifyNumber(
                timeArray[index].minutes,
                timeArray[index].hours != 0
              )
            }}
            :</span
          >

          {{
            stringifyNumber(
              timeArray[index].seconds,
              timeArray[index].minutes != 0 || timeArray[index].hours != 0
            )
          }}
        </td>
      </tr>
    </table>
    <div class="bounding-box" v-else>
      <span class="or-text"
        >The number of splits for this distance is over 100. Please increase the
        split distance to see the breakdown.</span
      >
    </div>
  </div>
</template>
<style lang="scss">
@import "../styles/variables";
table {
  th {
    font-weight: 400;
    font-size: 1.5rem;
    padding: 5px 10px;
  }
  td {
    padding: 0;
  }
  tr {
    font-weight: 300;
    font-size: 1.4rem;
  }
  tr:nth-child(even) {
    background-color: rgba(54, 61, 87, 0.5);
  }
  display: inline-block;
  text-align: center;
  padding: 10px 20px 20px 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.57);
  background-color: $primary-color;
  text-align: center;
  background-color: rgba(85, 97, 141, 0.5);
}
hr {
  width: 100%;
  border: white solid 1px;
  grid-column: 1 / span 2;
  margin: 25px auto;
}
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

.space-above {
  margin-top: 35px;
}

@media (max-width: 760px) {
  .or-text {
    padding: 0 4px;
  }
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

  tableHasTooManyRows = false;

  distArray: number[] = [0];
  timeArray: Time[] = [{ hours: 0, minutes: 0, seconds: 0 }];

  splitPace: Time = { hours: 0, minutes: 0, seconds: 0 };

  private time: Time = { hours: 0, minutes: 0, seconds: 0 };
  private pace: Time = { hours: 0, minutes: 0, seconds: 0 };

  get shouldDisplayTable(): boolean {
    return (
      this.distance != 0 &&
      this.splitDistance != 0 &&
      (this.pace.hours != 0 || this.pace.minutes != 0 || this.pace.seconds != 0)
    );
  }
  stringifyNumber(number: number, shouldAddZero: boolean): string {
    if (number >= -9 && number <= 9 && shouldAddZero) {
      return "0" + number.toString();
    }
    return number.toString();
  }
  get splitUnitString(): string | undefined {
    return Object.keys(distanceUnits).find(
      (key) => distanceUnits[key] == this.splitUnit
    );
  }
  get splitDistance(): number {
    return this.priv_splitDistance;
  }

  set splitDistance(splitDistance: number) {
    this.priv_splitDistance = splitDistance;
    this.updateSplitpace();
  }
  get splitUnit(): number {
    return this.priv_splitUnit;
  }

  set splitUnit(splitUnit: number) {
    this.priv_splitUnit = splitUnit;
    this.updateSplitpace();
  }

  /*   stringifyTime(time: number): string {
    if (time >= -9 && time <= 9) {
      return "0" + time.toString;
    }
    return time.toString();
  } */
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

  get distance(): number {
    return this.priv_distance;
  }
  set distance(distance: number) {
    this.priv_distance = distance;
    this.updatePace();
  }

  get distanceUnit(): number {
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
  get paceUnit(): number {
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

  updatePace(): void {
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
  updateTime(): void {
    const totalDistance = this.distance * this.distanceUnit;
    const totalPace =
      (this.pace.hours * 3600 + this.pace.minutes * 60 + this.pace.seconds) /
      this.paceUnit;

    const totalSecondsTime = totalPace * totalDistance;
    console.log(totalSecondsTime);
    this.time = timeUtil.getTimeFromSecs(totalSecondsTime, true);
    this.updateSplitpace();
  }

  updateSplitpace(): void {
    const totalPace =
      (this.pace.hours * 3600 + this.pace.minutes * 60 + this.pace.seconds) /
      this.paceUnit;

    const totalSplitTime = totalPace * (this.splitDistance * this.splitUnit);

    this.splitPace = timeUtil.getTimeFromSecs(totalSplitTime, true);
    this.updateSplitsArray();
  }

  updateSplitsArray(): void {
    if (!this.shouldDisplayTable) {
      this.distArray = [0];
      this.timeArray = [{ hours: 0, minutes: 0, seconds: 0 }];
      return;
    }

    if (
      (this.distance * this.distanceUnit) /
        (this.splitDistance * this.splitUnit) >
      100
    ) {
      this.tableHasTooManyRows = true;
      this.distArray = [];
      this.timeArray = [];
      return;
    }
    this.tableHasTooManyRows = false;
    this.distArray = [];
    this.timeArray = [];
    let totalSplitDistance = this.splitDistance * this.splitUnit;
    let totalDistance = this.distance * this.distanceUnit;
    let distanceDone = 0;

    let totalTime =
      this.time.hours * 3600 + this.time.minutes * 60 + this.time.seconds;
    let timeDone = 0;
    while (distanceDone < this.distance * this.distanceUnit) {
      let distanceLeft = totalDistance - distanceDone;
      /* let timeLeft = totalTime - timeDone; */
      if (distanceLeft < totalSplitDistance) {
        distanceDone += distanceLeft;
        this.distArray.push(timeUtil.roundToTwo(distanceDone / this.splitUnit));
        timeDone = totalTime * (distanceDone / totalDistance);
        this.timeArray.push(timeUtil.getTimeFromSecs(timeDone, true));
      } else {
        distanceDone += totalSplitDistance;
        this.distArray.push(timeUtil.roundToTwo(distanceDone / this.splitUnit));
        timeDone = totalTime * (distanceDone / totalDistance);
        this.timeArray.push(timeUtil.getTimeFromSecs(timeDone, true));
      }
      console.log(distanceDone / this.splitUnit);
    }
  }
}
</script>
