<template>
  <div class="home">
    <h3>Welcome {{this.$store.state.username}}</h3>

    <v-container class="my-5" fluid>
      <v-layout row wrap>
        <v-flex v-for="(i, index) in Notifications" :key="i.name">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{i.__typename}}</div>
                <v-list-item-title class="headline mb-1">{{i.title}}</v-list-item-title>
                <v-list-item-subtitle>{{i.body}}</v-list-item-subtitle>
                <v-list-item-subtitle>Created: {{i.createdAt}}</v-list-item-subtitle>
                <v-list-item-subtitle>Delivered: {{i.deliveredAt}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn text @click="deleteCard(index)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Home",
  apollo: {
    Notifications: gql`
      query {
        Notifications {
          title
          body
          createdAt
          deliveredAt
        }
      }
    `
  },
  data() {
    return {};
  },
  methods: {
    deleteCard: function(e) {
      let temp = this.$store.state.group[e];
      this.$store.state.deleted.push(temp);
      this.$store.state.group.splice(e, 1);
    }
  }
};
</script>
