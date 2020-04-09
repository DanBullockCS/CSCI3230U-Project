<template>
  <div class="signup">
    <label for="username">Password:</label>
    <input id="username" type="text" v-model="username" placeholder="Username" />
    <label for="password">Password:</label>
    <input id="password" type="password" v-model="password" placeholder="Password" />
    <label for="email">Email</label>
    <input id="email" type="email" v-model="email" placeholder="Email" />
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
  }
};
</script> 