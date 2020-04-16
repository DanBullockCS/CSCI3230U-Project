import Vue from "vue";
import Vuex from "vuex";
import darkmodeUI from './darkmodeUI'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    group: [],
    deleted: [],
    username: "",
    email: "",
    password: "",
  },
  mutations: {},
  actions: {},
  modules: { darkmodeUI }
});
