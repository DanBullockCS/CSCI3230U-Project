<template>
  <div class="trash">
    <h3>Trash</h3>

    <!-- This generates a list of accordion panels using a grid system of rows/column properties -->
    <v-row>
      <v-col cols="2" sm="6">
        <!-- Generates Notifications using the data provided using Apollo and The Notifications (and delete Array) themselves are imported
        from a Notification Component (Notification.vue)-->
        <!-- All of the data properties are displayed by the various keys in the data-->
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
              <!-- Button used to restores the specific index notification -->
              <v-btn text class="mr-5" outlined v-on:click="onRestore(index)">
                <v-icon left>mdi-file-restore-outline</v-icon>Restore
              </v-btn>
              <!-- Button used to permanently deletes the specific indexed notification -->
              <v-btn text outlined v-on:click="onDelete(index)">
                <v-icon left>mdi-trash-can</v-icon>Delete
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <!-- Permanently deletes all notifications in this view-->
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
      // Flags used for disabling and hiding specific elements
      emptyWarning: false,
      disableEmpty: false
    };
  },
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

  methods: {
    // Call this to push the indexed object back into the Notifications data and remove it from the deleteArray
    onRestore: function(e) {
      let temp = this.$store.state.deleted[e];
      this.Notifications.push(temp);
      this.$store.state.deleted.splice(e, 1);
    },
    // Call this to remove the indexed object from the deleteArray
    onDelete: function(e) {
      this.$store.state.deleted.splice(e, 1);
    },
    // Converts the time from milliseconds to hours
    convertTime: function(e) {
      let msConvert = (e / (1000 * 60 * 60)) % 24;
      return Math.floor(msConvert);
    },
    // Simply used to switch the boolean value on click which makes the alert visible
    emptyAllAlert: function() {
      this.emptyWarning = true;
    },
    // Simply used to switch the boolean value (which then hides the alert), and remove all notifications from the trash
    emptyAllYes: function() {
      this.$store.state.deleted = [];
      this.emptyWarning = false;
    },
    // Simply used to switch the boolean and do nothing
    emptyAllNo: function() {
      this.emptyWarning = false;
    }
  },
  computed: {
    // This is activated when in the vue and is used to keep the "Empty Trash" button disabled unless theres notifications in the trash view
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
