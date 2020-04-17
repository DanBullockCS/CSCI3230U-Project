<template>
  <v-col class="d-flex" cols="12" sm="6">
    <v-select @change="printSelection" :items="arbitraryList" label="A dropdown" solo dense></v-select>
  </v-col>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      arbitraryList: ["1", "2", "3", "4"]
    };
  },
  methods: {
    printSelection(option) {
      console.log(option);
    }
  }
};
</script>