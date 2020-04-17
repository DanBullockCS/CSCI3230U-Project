<template>
  <div class="home">
    <h3>Welcome {{this.$store.state.username}}</h3>
    <v-row class>
      <v-col cols="8">
        <v-expansion-panels accordion hover multiple>
          <Notification
            v-for="(i, index) in Notifications"
            :key="i.title"
            :title="i.title"
            :body="i.body"
            :deliveredAt="i.deliveredAt"
            :index="index"
          />
        </v-expansion-panels>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Filter Options</div>
              <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Button</v-btn>
            <v-btn text>Button</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Notification from "@/components/Notification.vue";

export default {
  name: "Home",
  components: { Notification },
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
    onDelete: function(e) {
      let temp = this.Notifications[e];
      this.$store.state.deleted.push(temp);
      this.Notifications.splice(e, 1);
      console.log(this.Notifications);
    }
  }
};
</script>

<style>
</style>