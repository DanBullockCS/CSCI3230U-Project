import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Settings from "../views/Settings.vue";
import Trash from "../views/Trash.vue";
import Analytics from "../views/Analytics.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Account",
    name: "Account",
    component: Account
  },
  {
    path: "/Settings",
    name: "Settings",
    // component: Settings,
    component: () => import(/* webpackChunkName: "about" */ "../views/Settings.vue")
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
