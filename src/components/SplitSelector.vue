<template>
  <div class="splits-selector selector-wrapper">
    <input
      type="number"
      class="distance-selector"
      v-on:input="updateSplitDistance($event.target.value)"
      :value="distance"
      placeholder="0"
    />
    <select :value="unit" @input="updateSplitUnit($event.target.value)">
      <option v-for="(unit, value) in distanceUnits" :value="unit" :key="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>
<style lang="scss">
@import "../styles/variables";
</style>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { distanceUnits } from "../models/units";

@Options({
  props: {
    distance: Number,
    unit: Number,
  },
})
export default class SplitSelector extends Vue {
  distanceUnits = distanceUnits;
  distance!: number;
  unit!: number;
  updateSplitDistance(value: number) {
    this.$emit("updateSplitDistance", value);
  }
  updateSplitUnit(value: number) {
    this.$emit("updateSplitUnit", value);
  }
}
</script>
