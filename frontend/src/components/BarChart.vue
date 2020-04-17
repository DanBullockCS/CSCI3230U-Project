<template>
  <div id="bar-container" class="svg-container" align="center">
    <h1>{{ title }}</h1>
    <svg id="bar-svg" v-if="redrawToggle === true" :width="svgWidth" :height="svgHeight">
      <g class="rectangles">
        <!-- 50 is the margin -->
        <rect
          v-for="item in data"
          class="bar-positive"
          :key="item[xKey]"
          :x="xScale(item[xKey]) + 50"
          :y="yScale(0)"
          :width="xScale.bandwidth()"
          :height="0"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

// Pixels of drawer
let drawerWidth = 256;

var margin = { top: 50, right: 50, bottom: 50, left: 50 },
  width = window.innerWidth - drawerWidth - margin.left - margin.right,
  height = window.innerHeight / 2 - margin.top - margin.bottom;

export default {
  name: "BarChart",
  props: {
    title: String,
    xKey: String,
    yKey: String,
    data: Array
  },
  mounted() {
    this.svgWidth = document.getElementById("bar-container").offsetWidth / 1.5;
    this.AddResizeListener();
    this.drawAxes();
    this.AnimateLoad();
  },

  // A little confusing because d3 and Vue both use "data" as a keyword.
  data: () => ({
    svgWidth: 0,
    redrawToggle: true
  }),

  methods: {
    AnimateLoad() {
      d3.selectAll("rect")
        .data(this.data)
        .transition()
        .ease(d3.easeLinear)
        .attr("y", d => {
          return this.yScale(d[this.yKey]) + 50;
        })
        .attr("height", d => {
          return this.svgHeight - this.yScale(d[this.yKey]);
        });
    },
    drawAxes() {
      d3.selectAll("g:not(.rectangles)").remove();
      let svg = d3
        .select("#bar-svg")
        .attr("width", this.svgWidth + margin.left + margin.right)
        .attr("height", this.svgHeight + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // X-axis
      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + this.svgHeight + ")")
        .call(d3.axisBottom(this.xScale)).text;
      // Y-axis
      svg
        .append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(this.yScale));

      // Labels
      svg
        .append("text")
        .attr(
          "transform",
          "translate(" + width / 2 + " ," + (height + margin.top) + ")"
        )
        .style("text-anchor", "middle")
        .text("Notification Titles");
      svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - height / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Notification IDs");
    },
    AddResizeListener() {
      // Redraw chart after the window has been resized
      window.addEventListener("resize", () => {
        this.$data.redrawToggle = false;
        this.$data.redrawToggle = true;
        this.$data.svgWidth =
          document.getElementById("bar-container").offsetWidth / 1.5;
        this.drawAxes();
        this.AnimateLoad();
      });
    }
  },

  computed: {
    // dataMax and dataMin used to calculate domain for yScale
    dataMax() {
      return d3.max(this.data, d => {
        return parseInt(d[this.yKey]);
      });
    },
    dataMin() {
      return d3.min(this.data, d => {
        return parseInt(d[this.yKey]);
      });
    },
    xScale() {
      return d3
        .scaleBand()
        .rangeRound([0, this.svgWidth - drawerWidth / 2])
        .padding(0.5)
        .domain(
          this.data.map(d => {
            return d[this.xKey];
          })
        );
    },
    yScale() {
      return d3
        .scaleLinear()
        .rangeRound([this.svgHeight, 0])
        .domain([this.dataMin > 0 ? 0 : this.dataMin, this.dataMax]);
    },
    svgHeight() {
      return height;
    }
  }
};
</script>

<style>
.bar-positive {
  fill: #003c71;
  transition: r 0.2s ease-in-out;
}

.bar-positive:hover {
  fill: #0077ca;
}

.svg-container {
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 1%;
  vertical-align: top;
  overflow: hidden;
}
</style>
