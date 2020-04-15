<template>
  <div class="home">
    <h3>Welcome {{this.$store.state.username}}</h3>

    <v-container class="my-5" fluid>
      <v-layout row wrap>
        <v-flex v-for="(i, index) in group" :key="i.name">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{i.notification}}</div>
                <v-list-item-title class="headline mb-1">From: {{i.name}}</v-list-item-title>
                <v-list-item-title class="headline mb-1">Age: {{i.age}}</v-list-item-title>
                <v-list-item-subtitle>Message: {{i.message}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn text @click="deleteCard(index)">Delete</v-btn>
              <v-btn text>Reply</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
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
      ]
    };
  },
  methods: {
    deleteCard: function(e) {
      this.$store.state.deleted.push(this.group.splice(e, 1));
      console.log(this.$store.state.deleted);
      // console.log(this.$store.state.deleted[1].name);
    }
  }
};
</script>
