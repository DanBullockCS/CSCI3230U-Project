<template>
  <v-list dense rounded>
    <v-list-item link to="/">
      <v-list-item-action>
        <v-icon>mdi-home</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>My Notifications</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item link to="/Account" :disabled="checkUser">
      <v-list-item-action>
        <v-icon>mdi-account</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Account</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/Settings" :disabled="checkUser">
      <v-list-item-action>
        <v-icon>mdi-settings</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/Trash" :disabled="checkUser">
      <v-list-item-action>
        <v-icon>mdi-trash-can</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Trash</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/Analytics" :disabled="checkUser">
      <v-list-item-action>
        <v-icon>mdi-chart-line</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>D3 Analytics</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  computed: {
    checkUser() {
      if (this.$store.state.username) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>
