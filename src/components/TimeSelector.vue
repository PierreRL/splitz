<template>
  <div class="time-selector selector-wrapper">
    <input
      placeholder="00"
      type="number"
      v-on:input="updateHours($event.target.value)"
      :value="timeHours"
    />
    :
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
    <span
      class="time-indicator desktop-time-indicator"
      id="desktop-time-indicator"
      >hrs:min:secs</span
    >
  </div>
  <span class="time-indicator" id="mobile-time-indicator">hrs:min:secs</span>
</template>
<style lang="scss">
#mobile-time-indicator {
  display: none;
  margin-top: 5px;
}
#desktop-time-indicator {
  display: inline-block;
}
@media (max-width: 760px) {
  #desktop-time-indicator {
    display: none;
  }
  #mobile-time-indicator {
    display: block;
  }
}
</style>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    timeSeconds: Number,
    timeMinutes: Number,
    timeHours: Number,
  },
})
export default class TimeSelector extends Vue {
  timeSeconds!: number;
  timeMinutes!: number;
  timeHours!: number;

  updateSeconds(value: number) {
    this.$emit("updateSeconds", value);
  }
  updateMinutes(value: number) {
    this.$emit("updateMinutes", value);
  }
  updateHours(value: number) {
    this.$emit("updateHours", value);
  }
}
</script>
