<template>
  <div class="login">
    <h3>Sign In</h3>
    <div class="my-5">
      <v-col cols="2" sm="6">
        <v-text-field v-model="username" label="Username" outlined shaped></v-text-field>
        <v-text-field v-model="password" label="Password" type="password" outlined shaped></v-text-field>
      </v-col>

      <div class="mx-5">
        <v-btn large color="primary" href="/">Go Back</v-btn>
        <v-btn class="ml-12" large color="primary" href="/">Login</v-btn>
      </div>
    </div>

    <h2 class="mt-12">Havent made an Account yet?</h2>
    <div class="mx-5 my-2">
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