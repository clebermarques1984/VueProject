<template>
  <div>
      <app-counter/>
      <app-result/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator";
import Counter from "./Counter.vue";
import Result from "./Result.vue";

@Component({
    components: { 
        "app-result": Result,
        "app-counter": Counter
    }
})
export default class AppCounter extends Vue {
}



</script>

