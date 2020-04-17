import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Settings from "../views/Settings.vue";
import Trash from "../views/Trash.vue";
import Analytics from "../views/Analytics.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import store from '../store';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    beforeEnter: redirect,
    name: "Home",
    component: Home,
  },
  {
    path: "/Account",
    name: "Account",
    component: Account
  },
  {
    path: "/Settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/Trash",
    name: "Trash",
    component: Trash
  },
  {
    path: "/Analytics",
    name: "Analytics",
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
  },
  { path: '*', redirect: '/' }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



function redirect(to, from, next) {
  if (store.state.username) {
    // or however you store your logged in state
    next(); // allow to enter route
  } else {
    next('/Login'); // go to '/login';
  }
}

export default router;



