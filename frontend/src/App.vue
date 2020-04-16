<template>
  <div id="app">
    <v-app id="notifier">
      <v-content>
        <Drawer />

        <v-container fluid>
          <!-- The content being routed -->
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Drawer from "@/components/Drawer.vue";

export default {
  name: "app",
  components: { Drawer },
  props: {
    source: String
  }
};
</script>

<style>
/* Scrollbar */
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #272727;
  border-left: 1px solid #272727;
}

::-webkit-scrollbar-thumb {
  background: #3c3c3c;
  border: solid 3px #272727;
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>