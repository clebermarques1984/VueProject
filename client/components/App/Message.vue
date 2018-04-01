<template>
    <div>
        <h1>{{ message }}</h1>
        <app-input
          :msg="message"
          :changeFn="messageChanged"
          @messageChanged="message = $event">
        </app-input>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import AppInput from "./Input.vue";

@Component({
  components: { AppInput }
})
export default class Message extends Vue {
  message: string = "From Message.vue";

  messageChanged(event: any) {
    this.message = event.target.value;
  }
}
</script>

