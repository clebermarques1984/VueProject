<template>
  <div>
      <p>Count from State: {{ counter.count }}</p>
      <p>Count from Getter: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Getter } from "vuex-class";
import { CounterState } from "../../store/counter/types";

const namespace: string = "counter";

@Component
export default class Home extends Vue {
  @State counter: CounterState;
  
  @Getter("getCount", { namespace })
  count: number;
}
</script>
