<template>
  <div class="account">
    <h3>Account Preferences</h3>
    <!-- Change Username request form using Veutify-->
    <h3 class="mt-5">Change Username:</h3>
    <h4>Current Username: {{this.$store.state.username}}</h4>
    <v-form class="mt-5" @submit="checkFormUser" action="/" method="post">
      <v-col cols="2" sm="6">
        <div class="mx-5">
          <v-text-field v-model="username" label="Old Username" outlined shaped clearable></v-text-field>
          <v-text-field v-model="newUsername" label="New Username" outlined shaped clearable></v-text-field>
          <v-btn class="mx-5" large color="primary" type="submit" value="Submit">Change</v-btn>
        </div>
      </v-col>
    </v-form>
    <br />

    <!-- Error alerts for failing Username Change conditions -->
    <v-alert type="error" v-if="errUser.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-bind:key="error" v-for="error in errUser">{{ error }}</li>
      </ul>
    </v-alert>

    <!-- Change Password request form using Veutify-->
    <h3 class="mt-12">Change Password:</h3>
    <!-- <h4>Current Email: {{this.$store.state.password}}</h4> -->
    <v-form class="mt-5" @submit="checkFormPassword" action="/" method="post">
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
          <v-btn class="mx-5" large color="primary" type="submit" value="Submit2">Change</v-btn>
        </div>
      </v-col>
    </v-form>
    <br />

    <!-- Error alerts for failing Password Change conditions -->
    <v-alert type="error" v-if="errPassword.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-bind:key="error" v-for="error in errPassword">{{ error }}</li>
      </ul>
    </v-alert>

    <!-- Change Email request form using Veutify-->
    <h3 class="mt-12">Change Email Address</h3>
    <h4>Current Email: {{this.$store.state.email}}</h4>
    <v-form class="mt-5" @submit="checkFormEmail" action="/" method="post">
      <v-col cols="2" sm="6">
        <div class="mx-5">
          <v-text-field v-model="email" label="Old Email" type="email" outlined shaped clearable></v-text-field>
          <v-text-field v-model="newEmail" label="New Email" type="email" outlined shaped clearable></v-text-field>
          <v-btn class="mx-5" large color="primary" type="submit" value="Submit3">Change</v-btn>
        </div>
      </v-col>
    </v-form>
    <br />
    <!-- Error alerts for failing Email Change conditions -->
    <v-alert type="error" v-if="errEmail.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-bind:key="error" v-for="error in errEmail">{{ error }}</li>
      </ul>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    // These are the only data values being used here
    // errUser holds an array of error messages that is displayed when the used fails to meet conditions on the Username Change form
    // errUser holds an array of error messages that is displayed when the used fails to meet conditions on the Password Change form
    // errUser holds an array of error messages that is displayed when the used fails to meet conditions on the Email Change form
    return {
      errUser: [],
      username: "",
      newUsername: "",
      errPassword: [],
      password: "",
      newPassword: "",
      confirmNewPassword: "",
      errEmail: [],
      email: "",
      newEmail: ""
    };
  },
  methods: {
    // This checks the various conditions that the user has to follow and will update the Username when the conditions all pass for the User Changes
    checkFormUser: function(e) {
      if (
        this.username &&
        this.newUsername &&
        this.$store.state.username == this.username
      ) {
        this.$store.state.username = this.newUsername;
        this.$router.push("/");

        return true;
      }
      //If the failing conditions below end up as true, then the errUser array will have messages pushed into it and will be displayed in the error alert when clicking the Change button
      this.errUser = [];

      if (!this.username || this.username != this.$store.state.username) {
        this.errUser.push("Old Username required.");
      }
      if (!this.newUsername) {
        this.errUser.push("New Username required.");
      }
      e.preventDefault();
    },

    // This checks the various conditions that the user has to follow and will update the Password when the conditions all pass for the Password Changes
    checkFormPassword: function(e) {
      if (
        this.password &&
        this.newPassword &&
        this.confirmNewPassword &&
        this.$store.state.password == this.password &&
        this.newPassword == this.confirmNewPassword &&
        this.newPassword.length >= 8
      ) {
        this.$store.state.password = this.newPassword;
        this.$router.push("/");
        return true;
      }
      //If the failing conditions below end up as true, then the errPassword array will have messages pushed into it and will be displayed in the error alert when clicking the Change button
      this.errPassword = [];

      if (!this.password || this.password != this.$store.state.password) {
        this.errPassword.push("Old Password required.");
      }
      if (this.newPassword.length < 8) {
        this.errPassword.push(
          "New Password needs at least 8 characters currently only have " +
            this.newPassword.length +
            " Characters"
        );
      }
      if (!this.newPassword) {
        this.errPassword.push("New Password required.");
      }
      if (!this.confirmNewPassword) {
        this.errPassword.push("New Password confirmation required.");
      }
      if (this.newPassword != this.confirmNewPassword) {
        this.errPassword.push("Passwords do not Match.");
      }
      e.preventDefault();
    },

    // This checks the various conditions that the user has to follow and will update the Email when the conditions all pass for the Email Changes
    checkFormEmail: function(e) {
      if (
        this.email &&
        this.newEmail &&
        this.$store.state.email == this.email
      ) {
        this.$store.state.email = this.newEmail;
        this.$router.push("/");
        return true;
      }
      //If the failing conditions below end up as true, then the errEmail array will have messages pushed into it and will be displayed in the error alert when clicking the Change button
      this.errPassword = [];
      this.errEmail = [];

      if (!this.email || this.email != this.$store.state.email) {
        this.errEmail.push("Old Email required.");
      }
      if (!this.newEmail) {
        this.errEmail.push("New Email required.");
      }
      e.preventDefault();
    }
  }
};
</script>
