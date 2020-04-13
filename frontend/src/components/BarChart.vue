<template>
  <div id="bar-container" class="svg-container" align="center">
    <h1>{{ title }}</h1>
    <svg v-if="redrawToggle === true" :width="svgWidth" :height="svgHeight">
      <g>
        <rect
          v-for="item in data"
          class="bar-positive"
          :key="item[xKey]"
          :x="xScale(item[xKey])"
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

export default {
  name: "BarChart",
  props: {
    title: String,
    xKey: String,
    yKey: String,
    data: Array
  },
  mounted() {
    this.svgWidth = document.getElementById("bar-container").offsetWidth * 0.75;
    this.AddResizeListener();
    this.AnimateLoad();
  },

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
          return this.yScale(d[this.yKey]);
        })
        .attr("height", d => {
          return this.svgHeight - this.yScale(d[this.yKey]);
        });
    },
    AddResizeListener() {
      // Redraw chart after the window has been resized
      window.addEventListener("resize", () => {
        this.$data.redrawToggle = false;
        this.$data.redrawToggle = true;
        this.$data.svgWidth =
          document.getElementById("bar-container").offsetWidth * 0.75;
        this.AnimateLoad();
      });
    }
  },

  computed: {
    // dataMax and dataMin used to calculate domain for yScale
    dataMax() {
      return d3.max(this.data, d => {
        return d[this.yKey];
      });
    },
    dataMin() {
      return d3.min(this.data, d => {
        return d[this.yKey];
      });
    },
    xScale() {
      return d3
        .scaleBand()
        .rangeRound([0, this.svgWidth])
        .padding(0.1)
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
      return this.svgWidth / 2;
    }
  }
};
</script>

<style scoped>
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
