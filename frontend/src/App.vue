<template>
  <div id="app">
    <v-app id="notifier">
      <v-content>
        <v-navigation-drawer v-model="drawer" app>
          <Drawer />
          <template v-slot:append>
            <div class="pa-2">
              <v-switch v-model="darkmode" label="Dark Mode"></v-switch>
              <v-btn class="mb-2 primary" to="Login" block v-show="checkUser">Login</v-btn>
              <v-btn class="mb-2 primary" to="SignUp" block v-show="checkUser">Sign Up</v-btn>
              <v-btn block v-show="checkUser2" @click="logoutBtn">Logout</v-btn>
            </div>
          </template>
        </v-navigation-drawer>

        <v-container fluid>
          <!-- The content being routed -->
          <router-view />
        </v-container>
      </v-content>

      <v-app-bar app color="gray">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Notifier</v-toolbar-title>
      </v-app-bar>

      <v-footer color="gray" app>
        <span>Notifier &copy; 2020</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Drawer from "@/components/Drawer.vue";

export default {
  name: "app",
  components: { Drawer },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    darkmode: false // Default to light mode
  }),
  methods: {
    logoutBtn() {
      this.$store.state.username = "";
      this.$router.push("/");
    }
  },
  // Dark mode theme watch
  watch: {
    darkmode(newValue) {
      this.$vuetify.theme.dark = newValue;
    }
  },
  computed: {
    checkUser() {
      if (this.$store.state.username) {
        return false; // or === 0
      } else {
        return true;
      }
    },

    checkUser2() {
      if (this.$store.state.username) {
        return true; // or === 0
      } else {
        return false;
      }
    }
  }
};
</script>
