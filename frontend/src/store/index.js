import Vue from "vue";
import Vuex from "vuex";
import darkmodeUI from './darkmodeUI'

import gql from 'graphql-tag'
import {apolloClient} from '@/plugins/apollo'


Vue.use(Vuex);

let state = {
  notifications: [
    // {
    //   name: "test",
    //   id: 1,

    // }
  ],
  notificationGroups: [],
  drawerHidden: true,
  loggedIn: false,
  group: [],
  deleted: [],
  username: "",
  email: "",
  password: "",
}

const mutations = {
  setNotifierGroups(state, groups) {
    state.notificationGroups = groups
  }
}

const actions = {
  async getCurrentNotifications({commit}) {
    let {data} = await apolloClient.query({
      query: gql`
      query {
        BaseNotifierGroups {
          id
          name: displayName
          createdAt
          children: Children {
            id
            name: displayName
          }
        }
      }
      `
    })

  },
  async getNotifierGroups({commit}) {
    
    console.log("boutta get")
    let {data} = await apolloClient.query({
      query: gql`
      query {
        BaseNotifierGroups {
          id
          name: displayName
          createdAt
          children: Children {
            id
            createdAt
            name: displayName
            children: Children {
              id
              createdAt
              name: displayName
              children: Children {
                id
                createdAt
                name: displayName
                children: Children {
                  id
                  createdAt
                  name: displayName
                }
              }
            }
          }
        }
      }
      `
    })
    console.log("vuex action",data)
    
    commit('setNotifierGroups',data.BaseNotifierGroups);
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: { darkmodeUI }
});
