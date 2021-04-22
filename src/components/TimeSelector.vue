<template>
  <div class="time-selector">
    <input type="number" v-model="timeMinutes" />
    :
    <input type="number" v-model="timeSeconds" />
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
