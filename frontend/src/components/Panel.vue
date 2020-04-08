<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <v-tooltip left>
            <template v-slot:activator="{ on }">
              <v-btn :href="source" icon large target="_blank" v-on="on">
                <v-icon large>mdi-chart-line-stacked</v-icon>
              </v-btn>
            </template>
            <span>SomePlaceHolderLeft</span>
          </v-tooltip>

          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn icon large :href="source" target="_blank" v-on="on">
                <v-icon large>mdi-chart-timeline</v-icon>
              </v-btn>
            </template>
            <span>SomePlaceHolderRight</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>