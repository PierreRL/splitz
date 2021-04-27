<template>
  <div class="time-selector selector-wrapper">
    <span class="label-selector">Pace</span>
    <span class="pace-output">{{ paceMinutes }} : {{ paceSecondsString }}</span>
    min/km
  </div>
</template>
<style lang="scss">
.pace-output {
  font-size: 24px;
  font-weight: 300;
}
</style>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    paceSeconds: Number,
    paceMinutes: Number,
  },
})
export default class TimeSelector extends Vue {
  paceSeconds!: number;
  paceMinutes!: number;

  get paceSecondsString(): string {
    if (this.paceSeconds >= -9 && this.paceSeconds <= 9) {
      return "0" + this.paceSeconds.toString();
    } else {
      return this.paceSeconds.toString();
    }
  }
}
</script>
