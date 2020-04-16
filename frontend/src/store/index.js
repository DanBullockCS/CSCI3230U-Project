import Vue from "vue";
import Vuex from "vuex";
import darkmodeUI from './darkmodeUI'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    group: [],
    deleted: [],
    username: "",
  },
  mutations: {},
  actions: {},
  modules: { darkmodeUI }
});
