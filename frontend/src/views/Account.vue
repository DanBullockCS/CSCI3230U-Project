<template>
  <div class="account">
    <h3>Account Preferences</h3>
    <h3 class="mt-5">Change Username:</h3>
    <v-col cols="2" sm="6">
      <div class="mx-5">
        <v-text-field v-model="username" label="Old Username" outlined shaped></v-text-field>
        <v-text-field v-model="newUsername" label="New Username" outlined shaped></v-text-field>
        <v-btn class="mx-5" large color="primary" href="/Account">Change</v-btn>
      </div>
    </v-col>
    <h3 class="mt-12">Change Password:</h3>
    <v-col cols="2" sm="6">
      <div class="mx-5">
        <v-text-field
          v-model="password"
          label="Old Password"
          type="password"
          outlined
          shaped
          clearable
        ></v-text-field>
        <v-text-field
          v-model="newPassword"
          label="New Password"
          type="password"
          outlined
          shaped
          clearable
        ></v-text-field>
        <v-text-field
          v-model="confirmNewPassword"
          label="Confirm New Password"
          type="password"
          outlined
          shaped
          clearable
        ></v-text-field>
        <v-btn class="mx-5" large color="primary" href="/Account">Change</v-btn>
      </div>
    </v-col>
    <h3 class="mt-12">Change Email Address</h3>
    <v-col cols="2" sm="6">
      <div class="mx-5">
        <v-text-field v-model="email" label="Old Email" type="email" outlined shaped clearable></v-text-field>
        <v-text-field v-model="newEmail" label="New Email" type="email" outlined shaped clearable></v-text-field>
        <v-btn class="mx-5" large color="primary" href="/Account">Change</v-btn>
      </div>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      username: "",
      newUsername: "",
      password: "",
      newPassword: "",
      confirmNewPassword: "",
      email: "",
      newEmail: ""
    };
  }
};
</script>
