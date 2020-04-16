<template>
  <v-data-table :headers="headers" :items="events" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Related Events",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Data", value: "data" },
        { text: "Sender", value: "sender" },
        { text: "Creation Date", value: "createdAt" },
        { text: "Deletion Date", value: "deletedAt" }
      ],
      events: [
        {
          data: "DATA",
          sender: "User1",
          createdAt: "2017-10-4",
          deletedAt: "2017-10-4"
        },
        {
          data: "DATA",
          sender: "User1",
          createdAt: "2017-10-4",
          deletedAt: "2017-10-4"
        },
        {
          data: "DATA",
          sender: "User1",
          createdAt: "2017-10-4",
          deletedAt: "2017-10-4"
        },
        {
          data: "DATA",
          sender: "User1",
          createdAt: "2017-10-4",
          deletedAt: "2017-10-4"
        },
        {
          data: "DATA",
          sender: "User1",
          createdAt: "2017-10-4",
          deletedAt: "2017-10-4"
        },
        {
          data: "DATA",
          sender: "User2",
          createdAt: "2018-10-4",
          deletedAt: "2018-10-4"
        },
        {
          data: "DATA",
          sender: "User1",
          createdAt: "2017-10-4",
          deletedAt: "2017-10-4"
        }
      ]
    };
  }
};
</script>