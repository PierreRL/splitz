<template>
  <div class="time-selector selector-wrapper">
    <span class="label-selector">Time</span>
    <input
      placeholder="00"
      type="number"
      v-on:input="updateMinutes($event.target.value)"
      :value="timeMinutes"
    />
    :
    <input
      placeholder="00"
      type="number"
      v-on:input="updateSeconds($event.target.value)"
      :value="timeSeconds"
    />
  </div>
</template>
<style lang="scss"></style>
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
