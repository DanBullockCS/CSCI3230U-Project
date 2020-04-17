<template>
  <!-- <h1>HI</h1> -->
  <v-treeview dense open-on-click v-model="notifiers" :items="BaseNotifierGroups">
    <!-- <template slot="label" -->
  </v-treeview>
  <!-- <v-list-group prepend-icon="mdi-folder" value="true">
    <template v-slot:activator>
      <v-list-item-title>Groups</v-list-item-title>
    </template>

    <v-treeview rounded hoverable activatable :items="NotifierGroups" item-key="displayName"></v-treeview>
  </v-list-group>-->
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "NotifierGroupTree",
  // props: ["title", "body", "deliveredAt", "index"],
  props: {
    // name: String
    notifiers: Array
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
  data() {
    return {
      arbitraryList: ["1", "2", "3", "4"]
    };
  },
  methods: {}
};
</script>

<style>
.vertical-margin {
  /* margin-top: 0.2rem; */
  margin-bottom: 0.5rem;
}
</style>