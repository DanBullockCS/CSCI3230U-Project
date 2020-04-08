<template>
  <div id="app">
    <Drawer title="Notifier" />
    <router-view />
  </div>
</template>

<script>
import Drawer from "@/components/Drawer.vue";

export default {
  name: "app",
  components: {
    Drawer
  }
};
</script>
