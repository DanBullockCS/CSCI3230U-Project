<template>
  <div id="line-container" class="svg-container" align="center">
    <h1>{{ title }}</h1>
    <svg id="line-svg" v-if="redrawToggle === true" :width="svgWidth" :height="svgHeight" />
  </div>
</template>


<script>
import * as d3 from "d3";

var margin = { top: 50, right: 50, bottom: 50, left: 50 },
  width = window.innerWidth - margin.left - margin.right, // Use the window's width
  height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

export default {
  name: "LineChart",
  props: {
    title: String,
    data: Array
  },
  mounted() {
    this.svgWidth =
      document.getElementById("line-container").offsetWidth * 0.75;
    this.AddResizeListener();
    this.plot();
  },

  data: () => ({
    svgWidth: 0,
    redrawToggle: true
  }),

  methods: {
    plot() {
      // The number of datapoints
      let n = 21;

      let xScale = d3
        .scaleLinear()
        .domain([0, n - 1]) // input
        .range([0, width]); // output

      let yScale = d3
        .scaleLinear()
        .domain([0, 1]) // input
        .range([height, 0]); // output

      let line = d3
        .line()
        .x(function(d, i) {
          return xScale(i);
        }) // set the x values for the line generator
        .y(function(d) {
          return yScale(d.y);
        }) // set the y values for the line generator
        .curve(d3.curveMonotoneX); // apply smoothing to the line

      let dataset = d3.range(n).map(function(d) {
        return { y: d3.randomUniform(1)() };
      });

      let svg = d3
        .select("#line-svg")
        .html("")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

      svg
        .append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale));

      svg
        .append("path")
        .datum(dataset)
        .attr("class", "line")
        .attr("d", line);

      svg
        .selectAll(".dot")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", function(d, i) {
          return xScale(i);
        })
        .attr("cy", function(d) {
          return yScale(d.y);
        })
        .attr("r", 5);
    },
    AddResizeListener() {
      // Redraw chart after the window has been resized
      window.addEventListener("resize", () => {
        this.$data.redrawToggle = false;
        this.$data.redrawToggle = true;
        this.$data.svgWidth =
          document.getElementById("line-container").offsetWidth * 0.75;
        this.plot();
      });
    }
  },

  computed: {
    svgHeight() {
      return this.svgWidth;
    }
  }
};
</script>

<style>
.svg-container {
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 1%;
  vertical-align: top;
  overflow: hidden;
}

.line {
  fill: none;
  stroke: #e75d2a;
  stroke-width: 3;
}

.overlay {
  fill: none;
  pointer-events: all;
}

/* Style the dots by assigning a fill and stroke */
.dot {
  fill: #e75d2a;
  stroke: #fff;
}
</style>
