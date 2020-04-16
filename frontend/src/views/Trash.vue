<template>
  <div class="trash">
    <h3>Trash</h3>

    <v-row>
      <v-col cols="2" sm="6">
        <v-expansion-panels accordion focusable>
          <v-expansion-panel v-for="(i, index) in this.$store.state.deleted" :key="i.title">
            <div>
              <v-expansion-panel-header>
                <h4 class="text-left">{{i.title}}</h4>
                <label class="text-right">Recieved {{convertTime(i.deliveredAt)}} hours ago</label>
              </v-expansion-panel-header>
            </div>

            <v-expansion-panel-content class="pt-2">Message: {{i.body}}</v-expansion-panel-content>
            <v-expansion-panel-content>Created {{convertTime(i.createdAt)}} hours ago</v-expansion-panel-content>
            <v-expansion-panel-content>
              <v-btn text class="mr-5" outlined v-on:click="onRestore(index)">
                <v-icon left>mdi-file-restore-outline</v-icon>Restore
              </v-btn>
              <v-btn text outlined v-on:click="onDelete(index)">
                <v-icon left>mdi-trash-can</v-icon>Delete
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-btn text v-on:click="emptyAllAlert" class="text-left" :disabled="disableBtn">
      <v-icon left>mdi-trash-can</v-icon>Empty Trash
    </v-btn>

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
import gql from "graphql-tag";
export default {
  data() {
    return {
      emptyWarning: false,
      disableEmpty: false
    };
  },
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
  methods: {
    onRestore: function(e) {
      let temp = this.$store.state.deleted[e];
      this.Notifications.push(temp);
      this.$store.state.deleted.splice(e, 1);
    },
    onDelete: function(e) {
      this.$store.state.deleted.splice(e, 1);
    },
    convertTime: function(e) {
      let msConvert = (e / (1000 * 60 * 60)) % 24;
      return Math.floor(msConvert);
    },
    emptyAllAlert: function() {
      this.emptyWarning = true;
    },
    emptyAllYes: function() {
      this.$store.state.deleted = [];
      this.emptyWarning = false;
    },
    emptyAllNo: function() {
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
