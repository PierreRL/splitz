<template>
  <div class="pace-selector selector-wrapper">
    <input
      placeholder="00"
      type="number"
      v-on:input="updateMinutes($event.target.value)"
      :value="paceMinutes"
    />
    :
    <input
      placeholder="00"
      type="number"
      v-on:input="updateSeconds($event.target.value)"
      :value="paceSeconds"
    />
    <select :value="unit" @input="updateUnit($event.target.value)">
      <option v-for="(unit, value) in paceUnits" :value="unit" :key="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { paceUnits } from "../models/units";

@Options({
  props: {
    paceSeconds: Number,
    paceMinutes: Number,
  },
})
export default class PaceSelector extends Vue {
  paceSeconds!: number;
  paceMinutes!: number;
  paceUnits = paceUnits;

  updateSeconds(value: number) {
    this.$emit("updateSeconds", value);
  }
  updateMinutes(value: number) {
    this.$emit("updateMinutes", value);
  }
}
</script>
