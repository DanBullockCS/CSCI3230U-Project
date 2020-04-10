<template>
  <div class="signup">
    <h3>Register Below</h3>
    <v-form class="mt-5" ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="username" label="Username" type="text" outlined shaped clearable></v-text-field>
      <v-text-field v-model="email" label="Email" type="email" outlined shaped clearable></v-text-field>
      <v-text-field v-model="password" label="Password" type="password" outlined shaped clearable></v-text-field>
      <v-text-field
        v-model="password2"
        label="Retype Password"
        type="password"
        outlined
        shaped
        clearable
      ></v-text-field>

      <v-btn color="success" href="/">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {}
};
</script> 
