<template>
  <div class="trash">
    <h3>Trash</h3>

    <v-container class="my-5" fluid>
      <v-layout row wrap>
        <v-flex v-for="i in this.$store.state.deleted" :key="i.name">
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
              <!-- <v-btn text @click="deleteCard(index)">Delete</v-btn> -->
              <v-btn text>Reply</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <button @click="printCard">click</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // printCard: function(e) {
    //   console.log(this.$store.state.deleted);
    //   console.log(this.$store.state.deleted[0]);
    // }
  }
};
</script>
