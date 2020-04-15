import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    group: [
      {
        name: "Sinthooran",
        age: 21,
        notification: "Work",
        message: "Web Dev Time"
      },
      {
        name: "Daniel",
        age: 21,
        notification: "Work",
        message: "Web Dev Time"
      },
      {
        name: "Alex",
        age: 21,
        notification: "Work",
        message: "Web Dev Time"
      },
      {
        name: "Nate",
        age: 21,
        notification: "Work",
        message: "Web Dev Time"
      },
      {
        name: "Gavin",
        age: "21",
        notification: "CV",
        message: "CV Time"
      },
      {
        name: "Sammy",
        age: "21",
        notification: "MPAC",
        message: "MPAC Time"
      }
    ],
    deleted: [],
    username: "",
  },
  mutations: {

  },
  actions: {},
  modules: {}
});
