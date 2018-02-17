import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import axios from 'axios';

import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Signin from './components/Signin.vue';
import IsLogin from './components/IsLogin.vue';
import NotFound from './components/NotFound.vue';
import Main from './components/Main.vue';
import Confirm from './components/Confirm.vue';
import Result from './components/Result.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/confirm/:id/:code", name: "confirm", component: Confirm, children: [
      { path: "result", name: "result", props: true, component: result }
    ]},
    { path: "/main", name: "main", component: Main },
    { path: "/login", name: "login", component: Login },
    { path: "/signin", name: "signin", component: Signin },
    { path: "/profile", name: "profile", component: IsLogin },
    { path: "*", component: NotFound }
  ]
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
