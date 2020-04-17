import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Settings from "../views/Settings.vue";
import Trash from "../views/Trash.vue";
import Analytics from "../views/Analytics.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

import store from "@/store"

Vue.use(VueRouter);

function is_logged_in(to, from, next){
  next(); //couldnt' finish it
  // if(store.state.loggedIn) {
  //     next(); // allow to enter route
  // } else{
  //     next('/login'); // go to '/login';
  // }
}

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: is_logged_in,
    component: Home
  },
  {
    path: "/Account",
    name: "Account",
    beforeEnter: is_logged_in,
    component: Account
  },
  {
    path: "/Settings",
    name: "Settings",
    beforeEnter: is_logged_in,
    component: Settings,
  },
  {
    path: "/Trash",
    name: "Trash",
    beforeEnter: is_logged_in,
    component: Trash
  },
  {
    path: "/Analytics",
    name: "Analytics",
    beforeEnter: is_logged_in,
    component: Analytics
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
