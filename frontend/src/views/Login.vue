<template>
  <div class="login">
    <h3>Sign In</h3>
    <div class="my-5">
      <v-col cols="2" sm="6">
        <v-text-field v-model="username" label="Username" outlined shaped></v-text-field>
        <v-text-field v-model="password" label="Password" type="password" outlined shaped></v-text-field>
      </v-col>

      <div class="mx-5">
        <v-btn large color="primary" href="/">Login</v-btn>
      </div>
    </div>

    <h3 class="mt-12">Haven't made an Account yet?</h3>
    <div class="mx-5">
      <br />
      <v-btn large color="purple" href="/SignUp">Sign Up</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script> 