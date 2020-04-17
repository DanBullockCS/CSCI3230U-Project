<template>
  <div class="notifiergroup">
    <v-dialog v-model="isVisible" width="500">
      <v-card>
        <v-card-title class="headline grey">Create Notifier</v-card-title>

        <v-card-actions>
          <v-text-field v-model="name" label="Name" outlined shaped clearable></v-text-field>
        </v-card-actions>

        <v-card-actions>
          <v-btn color="success" type="submit" value="Save">Save</v-btn>
          <v-btn v-on:click="modalToggle()">Exit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Notifier",
  data() {
    return {
      token: "",
      isVisible: false
    };
  },
  methods: {
    modalToggle: function() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>