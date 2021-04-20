<template>
  <div>
    Distance {{ distance }} <input type="number" v-model="distance" /> <br />
    Time {{ time.minutes }} : {{ time.seconds }}
    <input type="number" v-model="time.minutes" />:<input type="number" v-model="time.seconds" /> <br />
    Pace {{ pace.minutes }} : {{ pace.seconds }} min/km
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  /* private distance = 0;
  public time = new Time(0);
  private _pace:Time = new Time(0); 

  get pace(): Time {
    if (this.distance == 0) {
      return new Time(0);
    }
    return new Time((this.time.timeInSecs / this.distance));
  } */
  public distance = 0;
  public time: Time = {minutes:0, seconds:0};
  public pace = function() : Time {
    /* const  = this.
    return {minutes: } */
  }
}
interface Time {
  minutes: number,
  seconds: number
}
/* class Time {
  private _minutes = 0;

  get minutes(): number {
    if (!this._seconds) {
      return 0;
    }
    return this._minutes;
  }

  set minutes(minutes: number) {
    if (minutes < 0) {
      return;
    } else {
      this._minutes = minutes;
    }
  }

  private _seconds = 0;
  get seconds(): number {
    if (!this._seconds) {
      return 0;
    }
    return this._seconds;
  }
  set seconds(seconds: number) {
    if (seconds < 0) {
      return;
    } else {
      this._seconds = seconds;
      this.computeTotalTime();
    }
  }
  private _timeInSecs = 0;
  get timeInSecs(): number {
    return this._timeInSecs;
  }
  set timeInSecs(timeInSecs: number) {
    if (timeInSecs < 0) {
      return;
    } else {
      this._timeInSecs = timeInSecs;
      this.computeTotalTime();
    }
  }

  private computeTotalTime() {
    this._timeInSecs = this._seconds + (this._minutes * 60);
  }
  constructor(timeInSecs: number) {
    this.setAllValues(timeInSecs);
  }

  setAllValues(timeInSecs: number) {
    this._timeInSecs = timeInSecs;
    this._minutes = Math.floor(timeInSecs / 60);
    this._seconds = timeInSecs - this.minutes * 60;
    this._milliseconds = Math.floor(timeInSecs / 1000) - this.seconds;
  }
} */
</script>
