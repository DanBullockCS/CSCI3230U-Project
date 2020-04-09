<template>
  <div class="login">
    <label for="username">Password:</label>
    <input id="username" type="text" v-model="username" placeholder="Username" />
    <label for="password">Password:</label>
    <input id="password" type="password" v-model="password" placeholder="Password" />
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