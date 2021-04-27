<template>
  <div class="distance-selector selector-wrapper">
    <span class="label-selector">Distance</span>
    <input
      type="number"
      v-on:input="updateDistance($event.target.value)"
      :value="distance"
      placeholder="0"
    />
  </div>
</template>
<style lang="scss">
@import "../styles/variables";
</style>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    distance: Number,
  },
})
export default class TimeSelector extends Vue {
  distance!: number;

  updateDistance(value: number) {
    this.$emit("updateDistance", value);
  }
}
</script>
