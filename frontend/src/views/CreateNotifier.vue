<template>
  <div class="notifier">
    <v-btn v-on:click="modalToggle()">Modal</v-btn>

    <div class="modal" v-show="isVisible">
      <div class="modal-header">
        <slot name="header">Create Notifier</slot>
      </div>

      <div class="modal-body">
        <slot name="body">
          <v-text-field v-model="token" label="Token" outlined shaped clearable></v-text-field>
          <v-textarea label="Custom Handler" outlined shaped clearable></v-textarea>
          <v-textarea label="Extra Data" outlined shaped clearable></v-textarea>
        </slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          <v-btn color="success" type="submit" value="Save">Save</v-btn>
          <v-btn v-on:click="hideModal()">Exit</v-btn>
        </slot>
      </div>
    </div>
    <!-- <v-form class="modal" action="/" method="post">
      <v-col cols="2" sm="6">
        <div class="mx-5">
          <v-text-field v-model="token" label="Token" outlined shaped clearable></v-text-field>
          <v-textarea label="Custom Handler" outlined shaped clearable></v-textarea>
          <v-textarea label="Extra Data" outlined shaped clearable></v-textarea>
        </div>

        <v-btn color="danger" type="submit" value="Cancel">Cancel</v-btn>
      </v-col>
    </v-form>-->
  </div>
</template>

<script>
export default {
  name: "Notifier",
  data() {
    return {
      token: "",
      isVisible: false
    };
  },
  methods: {
    close: function() {
      this.$emit("close");
    },

    modalToggle: function() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
