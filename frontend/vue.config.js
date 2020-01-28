const configureAPI = require("../backend/dev");

module.exports = {
  devServer: {
    before: configureAPI,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8081",
        changeOrigin: true, // needed for virtual hosted sites
        ws: true // proxy websockets
      }
    }
  },
  configureWebpack: {
    devtool: "source-map"
  }
};

// const path = require("path");
// chainWebpack: config => {
//   config
//     .entry("app")
//     .clear()
//     .add("./src/main.js")
//     .end();
//   config.resolve.alias.set("@", path.join(__dirname, "./src"));
// },
