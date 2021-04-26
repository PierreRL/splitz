<template>
  <div class="time-selector">
    <span class="label-selector">Time</span>
    <input
      type="number"
      v-on:input="updateMinutes($event.target.value)"
      :value="timeMinutes"
    />
    :
    <input
      type="number"
      v-on:input="updateSeconds($event.target.value)"
      :value="timeSeconds"
    />
  </div>
</template>
<style lang="scss">
@import "../styles/variables";
.time-selector {
  display: inline-block;
  padding: 10px 0;
}
</style>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    timeSeconds: Number,
    timeMinutes: Number,
  },
})
export default class TimeSelector extends Vue {
  timeSeconds!: number;
  timeMinutes!: number;

  updateSeconds(value: number) {
    this.$emit("updateSeconds", value);
  }
  updateMinutes(value: number) {
    this.$emit("updateMinutes", value);
  }
}
</script>
