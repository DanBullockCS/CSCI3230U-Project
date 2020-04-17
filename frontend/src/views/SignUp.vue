<template>
  <div class="signup">
    <h3>Register Below</h3>
    <v-form class="mt-5" @submit="checkForm" action="/" method="post">
      <v-col cols="2" sm="6">
        <v-text-field v-model="username" label="Username" type="text" outlined shaped clearable></v-text-field>
        <v-text-field v-model="email" label="Email" type="email" outlined shaped clearable></v-text-field>
        <v-text-field v-model="password" label="Password" type="password" outlined shaped clearable></v-text-field>
        <v-text-field
          v-model="confirmPassword"
          label="Retype Password"
          type="password"
          outlined
          shaped
          clearable
        ></v-text-field>

        <v-btn color="success" type="submit" value="Submit">Submit</v-btn>
      </v-col>
    </v-form>
    <br />

    <v-alert type="error" v-if="err.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-bind:key="error" v-for="error in err">{{ error }}</li>
      </ul>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      err: [],
      username: "",
      password: "",
      email: "",
      confirmPassword: ""
    };
  },
  methods: {
    checkForm: function(e) {
      if (
        this.username &&
        this.password &&
        this.email &&
        this.confirmPassword &&
        this.password == this.confirmPassword &&
        this.password.length >= 8
      ) {
        this.$store.state.username = this.username;
        this.$store.state.email = this.email;
        this.$store.state.password = this.password;
        this.$router.push("/");
        return true;
      }

      this.err = [];

      if (!this.username) {
        this.err.push("Username required.");
      }
      if (!this.password) {
        this.err.push("Password required.");
      }
      if (this.password.length < 4) {
        this.err.push(
          "Password needs at least 4 characters currently only have " +
            this.password.length +
            " Characters"
        );
      }
      if (!this.email) {
        this.err.push("Email required.");
      }
      if (!this.confirmPassword) {
        this.err.push("Password confirmation required.");
      }
      if (this.password != this.confirmPassword) {
        this.err.push("Passwords do not Match.");
      }
      e.preventDefault();
    }
  }
};
</script>
