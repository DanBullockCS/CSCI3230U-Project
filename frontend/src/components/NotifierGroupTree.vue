<template>
  <v-treeview dense open-on-click v-model="notifiers" :items="this.$store.state.notificationGroups">
    <template slot="label" slot-scope="{ item }">
      <div @click="changeNotifications(item)">
        <!-- <v-checkbox v-if="conditionalLogic" :value="getValue(item.id)" :label="item.name"></v-checkbox> -->
        <div>{{ item.name }}</div>
      </div>
    </template>
  </v-treeview>
</template>

<script>
import gql from "graphql-tag";
import { mapActions } from "vuex";

export default {
  name: "NotifierGroupTree",
  // props: ["title", "body", "deliveredAt", "index"],
  props: {
    // name: String
    notifiers: Array
  },
  beforeCreate() {
    console.log("displaye");
    this.$store.dispatch("getNotifierGroups");
  },
  apollo: {
    BaseNotifierGroups: gql`
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
  },
  methods: {
    ...mapActions(["getNotifierGroups"]),
    changeNotifications(item) {
      // console.log("change notif: ", item);
      // console.log("change notif: ", this.$store.state);
      
    }
  },
  data() {
    return {
      arbitraryList: ["1", "2", "3", "4"]
    };
  }
};
</script>

<style>
.vertical-margin {
  /* margin-top: 0.2rem; */
  margin-bottom: 0.5rem;
}
</style>