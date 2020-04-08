import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Settings from "../views/Settings.vue";
import Trash from "../views/Trash.vue";
import Analytics from "../views/Analytics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
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
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
