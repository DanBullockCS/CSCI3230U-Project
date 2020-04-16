<template>
  <div id="app">
    <v-app id="notifier">
      <v-content>
        <v-navigation-drawer v-model="drawer" app>
          <Drawer />
          <div class="pa-2">
            <v-btn class="mb-2 primary" to="Login" block v-show="checkUser">Login</v-btn>
            <v-btn class="mb-2 primary" to="SignUp" block v-show="checkUser">Sign Up</v-btn>
            <v-btn block v-show="checkUser2" @click="logoutBtn">Logout</v-btn>
          </div>
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
    drawer: null
  }),
  methods: {
    logoutBtn() {
      this.$store.state.username = "";
      this.$router.push("/");
    }
  },
  computed: {
    checkUser() {
      if (this.$store.state.username) {
        return false;
      } else {
        return true;
      }
    },

    checkUser2() {
      if (this.$store.state.username) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
/* Scrollbar */
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #272727;
  border-left: 1px solid #272727;
}

::-webkit-scrollbar-thumb {
  background: #3c3c3c;
  border: solid 3px #272727;
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>