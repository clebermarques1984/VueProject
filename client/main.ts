import Vue from 'vue';
import App from './Components/App/App.vue';
import router from "./router";
import store from "./store/index";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
