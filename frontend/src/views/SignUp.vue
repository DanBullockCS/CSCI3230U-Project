<template>
  <div class="signup">
    <h3>Register Below</h3>
    <v-form class="mt-5" @submit="checkForm" action="/" method="post">
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
    </v-form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      errors: [],
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
        this.confirmPassword
      ) {
        return true;
      }

      this.errors = [];

      if (!this.username) {
        this.errors.push("Username required.");
      }
      if (!this.password) {
        this.errors.push("Password required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      }
      if (!this.confirmPassword) {
        this.errors.push("Password confirmation required.");
      }

      e.preventDefault();
    }
  }
};
</script>
