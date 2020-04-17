<template>
  <div class="analytics">
    <h3 style="text-align: left;">Analytics</h3>
    <BarChart
      v-if="Notifications"
      title="Your Created Notifications: Visualized"
      xKey="title"
      yKey="id"
      :data="Notifications"
    />
    <!-- <LineChart title="A Line Chart" :data="barChartData" /> -->
  </div>
</template>

<script>
import * as d3 from "d3";
import gql from "graphql-tag";

import BarChart from "@/components/BarChart.vue";
// import LineChart from "@/components/LineChart.vue";

export default {
  name: "Analytics",
  components: {
    BarChart
    // LineChart
  },
  data() {
    return {
      barChartData: [
        {
          name: "S",
          amount: 55
        },
        {
          name: "A",
          amount: 40
        },
        {
          name: "B",
          amount: 34
        },
        {
          name: "C",
          amount: 8
        }
      ]
    };
  },
  apollo: {
    Notifications: gql`
      query {
        Notifications {
          title
          id
        }
      }
    `
  }
};
</script>

<style>
.analytics {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 30px;
}
</style>
