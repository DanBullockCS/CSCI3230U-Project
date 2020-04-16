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
    <!-- <v-form class="modal" action="/" method="post">
      <v-col cols="2" sm="6">
        <div class="mx-5">
          <v-text-field v-model="token" label="Token" outlined shaped clearable></v-text-field>
          <v-textarea label="Custom Handler" outlined shaped clearable></v-textarea>
          <v-textarea label="Extra Data" outlined shaped clearable></v-textarea>
        </div>

        <v-btn color="danger" type="submit" value="Cancel">Cancel</v-btn>
      </v-col>
    </v-form>-->
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
    close: function() {
      this.$emit("close");
    },

    modalToggle: function() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
