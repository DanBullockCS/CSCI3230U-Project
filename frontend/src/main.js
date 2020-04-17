import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import apolloProvider from "./plugins/apollo";

Vue.config.productionTip = false;
// Vue.prototype.$apollo = apolloProvider

// console.log("Pollo: ",apolloProvider)

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
