<template>
  <div class="trash">
    <h3>Trash</h3>

    <v-container class="my-5" fluid>
      <v-layout row wrap>
        <v-flex v-for="(i,index) in this.$store.state.deleted" :key="i.name">
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
              <v-btn text @click="restoreCard(index)">Restore</v-btn>
              <v-btn text @click="deleteCard(index)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-btn text @click="emptyAllAlert" block :disabled="disableBtn">Empty</v-btn>

    <v-alert type="error" v-if="emptyWarning == true">
      <b>Are you sure?</b>
      <ul>
        <v-btn text @click="emptyAllYes">Yes</v-btn>
        <v-btn text @click="emptyAllNo">No</v-btn>
      </ul>
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emptyWarning: false,
      disableEmpty: false
    };
  },
  methods: {
    restoreCard: function(e) {
      let temp = this.$store.state.deleted[e];
      this.$store.state.group.push(temp);
      this.$store.state.deleted.splice(e, 1);
    },
    deleteCard: function(e) {
      this.$store.state.deleted.splice(e, 1);
    },
    emptyAllAlert() {
      this.emptyWarning = true;
    },
    emptyAllYes() {
      this.$store.state.deleted = [];
      this.emptyWarning = false;
    },
    emptyAllNo() {
      this.emptyWarning = false;
    }
  },
  computed: {
    disableBtn() {
      if (
        this.$store.state.deleted == 0 ||
        this.$store.state.deleted == undefined
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
