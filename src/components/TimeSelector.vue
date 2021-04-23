<template>
  <div class="time-selector">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
