<template>
  <div class="login">
    <h3>Sign In</h3>
    <!-- A Login Form created using veutify and asks for specific requirements to login -->
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

    <!-- These alerts show up only when specific error statements are passed back to the user for not properly doing login Process -->
    <v-alert type="error" v-if="err.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-bind:key="error" v-for="error in err">{{ error }}</li>
      </ul>
    </v-alert>

    <!-- This button redirects you to the SignUp route using vue-router -->
    <h3 class="mt-12">Haven't made an Account yet?</h3>
    <div class="mx-5">
      <br />
      <v-btn large color="purple" class="white--text" to="/SignUp">Sign Up</v-btn>
    </div>
  </div>
</template>

<script>
import axois from "axios";

export default {
  name: "Login",
  data() {
    // These are the only data values being used here
    // err holds an array of error messages that is displayed when the used fails to meet conditions on the SignUp form
    return {
      err: [],
      username: "",
      password: ""
    };
  },
  methods: {
    // This checks the various conditions that the user has to follow and will proceed to the main page when the conditions all pass
    checkForm: function(e) {
      if (this.username && this.password && this.password.length >= 4) {
        this.$store.state.username = this.username;
        this.$store.state.password = this.password;
        this.$store.state.loggedIn = true;
        this.$store.state.drawerHidden = false;
        this.$router.push("/");
        return true;
      }

      //If the failing conditions below end up as true, then the err array will have messages pushed into it and will be displayed in the error alert when clicking the submit button
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

      // axios
      //   .post("/login", {
      //     username: this.username,
      //     password: this.password
      //   })
      //   .then(function(response) {
      //     console.log("login resp", response);
      //     this.$store.state.loggedIn = true;
      //     this.$store.state.drawerHidden = false;
      //     response.preventDefault();
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //     response.preventDefault();
      //   });

      e.preventDefault();
    }
  }
};
</script> 