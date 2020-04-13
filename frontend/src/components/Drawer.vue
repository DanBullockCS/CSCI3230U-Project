<template>
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
    <v-list-item to="/Account">
      <v-list-item-action>
        <v-icon>mdi-account</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Account</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to=/Settings link>
      <v-list-item-action>
        <v-icon>mdi-settings</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link href="/Trash">
      <v-list-item-action>
        <v-icon>mdi-trash-can</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Trash</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link href="/Analytics">
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
export default {};
</script>
