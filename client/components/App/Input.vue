<template>
  <div>
      <input type="text" :value="msg" @input="changeFn($event)">
      <input type="text" :value="msg" @input="changeMessage">
      <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";
import App from "./App.vue";

@Component
export default class Input extends Vue {
  @Prop(String)msg: string;
  @Prop(Function)changeFn: Function;

  @Emit('messageChanged')
  emitValue(val: string) {    
    //do local change if needed 
  };

  changeMessage(event: any) { 
    this.emitValue(event.target.value);
  }
}
</script>
