<template>
  <div class="home">
    <h3>Welcome {{this.$store.state.username}}</h3>
    <v-row class>
      <v-col cols="2" sm="6">
        <v-expansion-panels accordion focusable>
          <v-expansion-panel v-for="(i, index) in Notifications" :key="i.title">
            <div>
              <v-expansion-panel-header>
                <h4 class="text-left">{{i.title}}</h4>
                <label class="text-right">Recieved {{convertTime(i.deliveredAt)}} hours ago</label>
              </v-expansion-panel-header>
            </div>

            <v-expansion-panel-content class="pt-2">Message: {{i.body}}</v-expansion-panel-content>
            <v-expansion-panel-content>Created {{convertTime(i.createdAt)}} hours ago</v-expansion-panel-content>

            <v-expansion-panel-content>
              <v-btn text class="mr-5" outlined v-on:click="onDelete(index)">
                <v-icon left>mdi-trash-can</v-icon>Delete
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
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
    },
    convertTime: function(e) {
      let msConvert = (e / (1000 * 60 * 60)) % 24;
      return Math.floor(msConvert);
    }
  }
};
</script>
