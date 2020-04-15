<template>
  <div class="account">
    <h3>Account Preferences</h3>
    <h3 class="mt-5">Change Username:</h3>
    <h4>Currently known as {{this.$store.state.username}}</h4>
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

    <v-alert type="error" v-if="errUser.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-bind:key="error" v-for="error in errUser">{{ error }}</li>
      </ul>
    </v-alert>

    <h3 class="mt-12">Change Password:</h3>
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

    <v-alert type="error" v-if="errPassword.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-bind:key="error" v-for="error in errPassword">{{ error }}</li>
      </ul>
    </v-alert>

    <h3 class="mt-12">Change Email Address</h3>
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
    checkFormUser: function(e) {
      if (this.username && this.newUsername) {
        this.$store.state.username = this.newUsername;
        this.$router.push("/");

        return true;
      }

      this.errUser = [];

      if (!this.username) {
        this.errUser.push("Old Username required.");
      }
      if (!this.newUsername) {
        this.errUser.push("New Username required.");
      }
      e.preventDefault();
    },

    //P
    checkFormPassword: function(e) {
      if (
        this.password &&
        this.newPassword &&
        this.confirmNewPassword &&
        this.newPassword == this.confirmNewPassword
      ) {
        this.$router.push("/");
        return true;
      }

      this.errPassword = [];

      if (!this.password) {
        this.errPassword.push("Old Password required.");
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

    //Email
    checkFormEmail: function(e) {
      if (this.email && this.newEmail) {
        this.$router.push("/");
        return true;
      }

      this.errEmail = [];

      if (!this.email) {
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
