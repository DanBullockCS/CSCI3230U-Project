<template>
  <div class="home">
    <h3>Welcome {{this.$store.state.username}}</h3>

    <!-- <v-container class="my-5" fluid>
      <v-layout row wrap>
        <v-flex v-for="(i, index) in Notifications" :key="i.title">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{i.notification}}</div>
                <v-list-item-title class="headline mb-1">From: {{i.title}}</v-list-item-title>
                <v-list-item-title class="headline mb-1">Age: {{i.}}</v-list-item-title>
                <v-list-item-subtitle>Message: {{i.body}}</v-list-item-subtitle>
                <v-list-item-title class="headline mb-2">Made: {{i.createdAt}}</v-list-item-title>
                <v-list-item-title class="headline mb-">Sent: {{i.deliveredAt}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn text @click="deleteCard(index)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>-->

    <v-row>
      <v-expansion-panels :accordion="accordion" focusable :readonly="readonly">
        <v-expansion-panel v-flex v-for="(i) in Notifications" :key="i.title">
          <div>
            <v-expansion-panel-header>
              {{i.title}}
              <v-text class="text-right">Recieved {{i.deliveredAt}} hours ago</v-text>
            </v-expansion-panel-header>
          </div>

          <v-expansion-panel-content>Message: {{i.body}}</v-expansion-panel-content>
          <v-expansion-panel-content>Created {{i.createdAt}} hours ago</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
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
    `,
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
