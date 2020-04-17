<template>
  <!-- <h1>{{title}}</h1> -->
  <v-expansion-panel :key="title" class="vertical-margin">
    <!-- <h1>{{deliveredAt}}</h1> -->
    <div>
      <v-expansion-panel-header>
        <h4 class="text-left">{{title}}</h4>
        <label class="text-right text--secondary caption">{{convertTime(deliveredAt)}} hours ago</label>
        <!-- <label class="text-right">Recieved {{deliveredAt}} hours ago</label> -->
      </v-expansion-panel-header>
    </div>

    <!-- <v-expansion-panel-content class="pt-2">Message: {{index}}</v-expansion-panel-content> -->
    <v-expansion-panel-content :eager="true" class="pt-2">{{body}}</v-expansion-panel-content>

    <v-expansion-panel-content>
      <!-- <v-btn text class="mr-5" outlined v-on:click="onDelete(index)"> -->
      <v-btn text class="mr-5" outlined v-on:click="onDelete(this)">
        <v-icon left>mdi-trash-can</v-icon>Dismiss
      </v-btn>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "Notification",
  // props: ["title", "body", "deliveredAt", "index"],
  props: {
    title: String,
    body: String,
    deliveredAt: Number,
    index: Number
  },
  data() {
    return {
      arbitraryList: ["1", "2", "3", "4"],
      eager: true
    };
  },
  methods: {
    printSelection(option) {
      console.log(option);
    },
    convertTime: function(e) {
      let msConvert = (e / (1000 * 60 * 60)) % 24;
      return Math.floor(msConvert);
    },
    onDelete: function(e) {
      console.log(this);
      // this.remove();
        // destroy the vue listeners, etc
      this.$destroy();

      // remove the element from the DOM
      this.$el.parentNode.removeChild(this.$el);

      // var index = this.$store.notifications.indexOf(this);
      // if (index !== -1) this.$store.notifications.splice(index, 1);
      // let temp = this.Notifications[e];
      // this.$store.state.deleted.push(temp);
      // this.Notifications.splice(e, 1);
    }
  }
};
</script>

<style>
.vertical-margin {
  /* margin-top: 0.2rem; */
  margin-bottom: 0.5rem;
}
</style>