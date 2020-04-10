<template>
  <div id="app">
    <v-app id="notifier">
      <v-content>
        <v-navigation-drawer v-model="drawer" app>
          <Drawer />
          <template v-slot:append>
            <div class="pa-2">
              <v-btn class="mb-2 primary" href="Login" block>Login</v-btn>
              <v-btn block>Logout</v-btn>
            </div>
          </template>
        </v-navigation-drawer>

        <v-container fluid>
          <!-- The content being routed -->
          <router-view />
        </v-container>
      </v-content>

      <v-app-bar app color="gray" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Notifier</v-toolbar-title>
      </v-app-bar>

      <v-footer color="gray" app>
        <span class="white--text">Notifier &copy; 2020</span>
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

  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
