<template>
  <div class="login">
    <h3>Sign In</h3>

    <v-form class="mt-5" @submit="checkForm" action="/" method="post">
      <div class="my-5">
        <v-col cols="2" sm="6">
          <v-text-field v-model="username" label="Username" outlined shaped></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" outlined shaped></v-text-field>
        </v-col>

        <div class="mx-5">
          <v-btn large color="primary" type="submit" value="Submit">Login</v-btn>
        </div>
      </div>
    </v-form>

    <v-alert type="error" v-if="err.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-bind:key="error" v-for="error in err">{{ error }}</li>
      </ul>
    </v-alert>

    <h3 class="mt-12">Haven't made an Account yet?</h3>
    <div class="mx-5">
      <br />
      <v-btn large color="purple" class="white--text" to="/SignUp">Sign Up</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      err: [],
      username: "",
      password: ""
    };
  },
  methods: {
    checkForm: function(e) {
      if (this.username && this.password) {
        this.$store.state.username = this.username;
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
      e.preventDefault();
    }
  }
};
</script> 