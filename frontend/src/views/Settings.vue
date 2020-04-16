<template>
  <div class="notifier">
    <h3>Create Notifier</h3>

    <v-form class="mt-5" action="/" method="post">
      <v-col cols="2" sm="6">
        <div class="mx-5">
          <v-text-field v-model="token" label="Token" outlined shaped clearable></v-text-field>
          <v-textarea label="Custom Handler" outlined shaped clearable></v-textarea>
          <v-textarea label="Extra Data" outlined shaped clearable></v-textarea>
        </div>

        <v-btn v-on:click="close()" value="Cancel">Cancel</v-btn>
        <v-btn color="success" type="submit" value="Save">Save</v-btn>
      </v-col>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Settings"
};
</script>
