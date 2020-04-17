<template>
  <v-navigation-drawer disable-resize-watcher app ref="drawer" :width="navigation.width">
    <v-list dense rounded>
      <v-list-item link to="/">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>My Notifications</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item link to="/Account">
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/Settings">
        <v-list-item-action>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/Trash">
        <v-list-item-action>
          <v-icon>mdi-trash-can</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Trash</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/Analytics">
        <v-list-item-action>
          <v-icon>mdi-chart-line</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>D3 Analytics</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-group prepend-icon="mdi-folder" value="true">
        <template v-slot:activator>
          <v-list-item-title>Groups</v-list-item-title>
        </template>

        <v-treeview rounded hoverable activatable :items="NotifierGroups" item-key="displayName"></v-treeview>
      </v-list-group>

      <div class="pa-2">
        <v-btn class="mb-2 primary" to="Login" block v-show="checkUser">Login</v-btn>
        <v-btn class="mb-2 primary" to="SignUp" block v-show="checkUser">Sign Up</v-btn>
        <v-btn block v-show="checkUser2" @click="logoutBtn">Logout</v-btn>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import gql from "graphql-tag";

export default {
  data: () => {
    return {
      navigation: {
        width: 256,
        borderSize: 5
      }
    };
  },
  apollo: {
    NotifierGroups: gql`
      query {
        NotifierGroups {
          displayName
        }
      }
    `
  },
  computed: {
    checkUser() {
      if (this.$store.state.username) {
        return false;
      } else {
        return true;
      }
    },
    checkUser2() {
      if (this.$store.state.username) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    logoutBtn() {
      this.$store.state.username = "";
      this.$router.push("/");
    },
    // Drawer Resize code
    setBorderWidth() {
      let i = this.$refs.drawer.$el.querySelector(
        ".v-navigation-drawer__border"
      );
      // Style Border
      i.style.width = this.navigation.borderSize + "px";
      i.style.cursor = "ew-resize";
    },
    setEvents() {
      const minSize = this.navigation.borderSize; // Size of the border you can click
      const el = this.$refs.drawer.$el;
      const drawerBorder = el.querySelector(".v-navigation-drawer__border");
      const vm = this;
      const direction = el.classList.contains("v-navigation-drawer--right")
        ? "right"
        : "left";

      function resize(e) {
        document.body.style.cursor = "ew-resize";
        let f =
          direction === "right"
            ? document.body.scrollWidth - e.clientX
            : e.clientX;
        el.style.width = f + "px";
        // Make sure width of drawer doesn't go below 75 (icon width)
        if (parseInt(el.style.width) <= 75) {
          el.style.width = "75px";
        }
      }
      // Event Listeners for border
      drawerBorder.addEventListener(
        "mousedown",
        e => {
          if (e.offsetX < minSize) {
            el.style.transition = "initial";
            document.addEventListener("mousemove", resize, false);
          }
        },
        false
      );

      document.addEventListener(
        "mouseup",
        () => {
          el.style.transition = "";
          this.navigation.width = el.style.width;
          document.body.style.cursor = "";
          document.removeEventListener("mousemove", resize, false);
        },
        false
      );
    }
  },
  mounted() {
    // Call resize functions
    this.setBorderWidth();
    this.setEvents();
  }
};
</script>
