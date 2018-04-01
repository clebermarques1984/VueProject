import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "./components/Home/Home.vue";
import Users from "./components/User/Users.vue";
import AppCounter from "./components/Counter/AppCounter.vue";
import AppVuex from "./components/Vuex/AppVuex.vue";

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
const routes = [
  { path: '/', component: Home },
  { path: '/users/:id', component: Users },
  { path: '/counter/', component: AppCounter },
  { path: '/appvuex/', component: AppVuex }
]

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  routes // short for "routes: routes"
})

export default router;
