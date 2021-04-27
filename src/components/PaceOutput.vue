<template>
  <div class="time-selector selector-wrapper">
    <span class="pace-output">
      <span v-if="paceHours != 0">{{ paceHours }} : </span
      >{{ paceMinutesString }} : {{ paceSecondsString }}</span
    >
    <select
      :value="unit"
      @input="updateUnit($event.target.value)"
      class="pace-select"
    >
      <option v-for="(unit, value) in paceUnits" :value="unit" :key="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>
<style lang="scss">
.pace-output {
  font-size: 3rem;
  font-weight: 300;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.pace-select {
  align-content: flex-start;
}
</style>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { paceUnits } from "../models/units";

@Options({
  props: {
    paceSeconds: Number,
    paceMinutes: Number,
    paceHours: Number,
    unit: Number,
  },
})
export default class TimeSelector extends Vue {
  paceSeconds!: number;
  paceMinutes!: number;
  paceHours!: number;
  unit!: number;

  paceUnits = paceUnits;

  get paceSecondsString(): string {
    if (this.paceSeconds >= -9 && this.paceSeconds <= 9) {
      return "0" + this.paceSeconds.toString();
    }
    return this.paceSeconds.toString();
  }
  get paceMinutesString(): string {
    if (this.paceHours == 0) {
      return this.paceMinutes.toString();
    } else if (this.paceMinutes >= -9 && this.paceMinutes <= 9) {
      return "0" + this.paceMinutes.toString();
    }
    return this.paceMinutes.toString();
  }

  updateUnit(value: number) {
    this.$emit("updateUnit", value);
  }
}
</script>
