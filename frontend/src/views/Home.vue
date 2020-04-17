<template>
  <div class="home">
    <h3>Welcome {{this.$store.state.username}}</h3>
    <!-- This generates a list of accordion panels using a grid system of rows/column properties -->
    <v-row class>
      <v-col cols="8">
        <v-expansion-panels accordion hover multiple>
          <!-- Generates Notifications using the data provided using Apollo and The Notifications themselves are imported
          from a Notification Component (Notification.vue)-->
          <!-- All of the data properties are displayed by the various keys in the data-->
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
              <!-- Meant to display a panel that shows us various filter options to display data differently-->
              <div class="overline mb-4">Filter Options</div>
              <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <!-- Originally Used for deleting the notifications -->
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
  // Uses vue-apollo to grab contents from the GraphQl Server and we use the query data for displaying the notifications
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
    // Allows us to delete the indexed notification from the query data
    // Also we send a copy of the data to the trash view which displays the removed notification components
    onDelete: function(e) {
      let temp = this.Notifications[e];
      this.$store.state.deleted.push(temp);
      this.Notifications.splice(e, 1);
      console.log(this.Notifications);
    }
  }
};
</script>
