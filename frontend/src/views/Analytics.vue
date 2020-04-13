<template>
  <div class="analytics">
    <h3 style="text-align: left;">Analytics</h3>
    <BarChart title="A Bar Chart" xKey="name" yKey="amount" :data="barChartData" />
    <LineChart title="A Line Chart" />
  </div>
</template>

<script>
import * as d3 from "d3";

import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  name: "Analytics",
  components: {
    BarChart,
    LineChart
  },
  data() {
    return {
      barChartData: [
        {
          name: "S",
          amount: 54
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
