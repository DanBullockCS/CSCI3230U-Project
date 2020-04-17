<template>
  <v-expansion-panel :key="title" class="vertical-margin">
    <div>
      <v-expansion-panel-header>
        <h4 class="text-left">{{title}}</h4>
        <label class="text-right text--secondary caption">{{convertTime(deliveredAt)}} hours ago</label>
      </v-expansion-panel-header>
    </div>

    <v-expansion-panel-content :eager="true" class="pt-2">{{body}}</v-expansion-panel-content>

    <v-expansion-panel-content>
      <v-btn text class="mr-5" outlined v-on:click="onDelete(index)">
        <v-icon left>mdi-trash-can</v-icon>Dismiss
      </v-btn>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "Notification",
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
    }
  }
};
</script>

<style>
.vertical-margin {
  margin-bottom: 0.5rem;
}
</style>