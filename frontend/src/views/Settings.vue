<template>
  <div class="notifier">
    <v-switch v-model="darkmode" label="Dark Mode"></v-switch>

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
          <v-btn v-on:click="modalToggle()">Exit</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="success" type="submit" value="Save" float-right>Save</v-btn>
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
  },
  // Dark mode Theme
  computed: {
    darkmode: {
      get() {
        return this.$store.getters.isDark;
      },
      set() {
        this.$store.commit("toggleDarkMode");
        if (this.$store.getters.isDark) {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      }
    }
  }
};
</script>
