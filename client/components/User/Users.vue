<template>
  <div>
      Users {{ $route.params.id }} Component!!!
      <button @click="goHome">Go Home</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter from "vue-router"; //to use $router at goHome function
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Home extends Vue {
    @Prop(String) name: string;

    goHome() {
        this.$router.push('/');
    }
}
</script>
