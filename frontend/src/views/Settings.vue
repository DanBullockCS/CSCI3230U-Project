<template>
  <div class="notifier">
    <v-btn v-on:click="modalToggle()">Modal</v-btn>

    <v-dialog v-model="isVisible" width="500">
      <v-card>
        <v-card-title class="headline grey">Create Notifier</v-card-title>

        <v-card-actions>
          <v-text-field v-model="token" label="Token" outlined shaped clearable></v-text-field>
        </v-card-actions>
        <v-card-actions>
          <v-textarea label="Custom Handler" outlined shaped clearable></v-textarea>
        </v-card-actions>
        <v-card-actions>
          <v-textarea label="Extra Data" outlined shaped clearable></v-textarea>
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
