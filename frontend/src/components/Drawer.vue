<template>
  <v-app id="notifier">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense rounded>
        <v-list-item link href="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Notifications</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>

      <v-list dense rounded>
        <v-list-item link href="/settings">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="/trash">
          <v-list-item-action>
            <v-icon>mdi-trash-can</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Trash</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="/analytics">
          <v-list-item-action>
            <v-icon>mdi-chart-line</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>D3 Analytics</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="gray" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Notifier</v-toolbar-title>
    </v-app-bar>

    <v-footer color="gray" app>
      <span class="white--text">Notifier &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
