<template>
  <div>
    <app-message></app-message>
    <hr>
      <p>
        <router-link to="/">Home</router-link> |
        <router-link to="/Users/1">Users1</router-link> |
        <router-link to="/Users/2">Users2</router-link> |
        <router-link to="/Counter">Counter</router-link> |
        <router-link to="/AppVuex">Vuex</router-link>
      </p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppMessage from "./Message.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { AppMessage }
})
export default class App extends Vue { 
}
</script>
