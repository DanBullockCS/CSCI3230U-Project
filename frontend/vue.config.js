module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8081",
        changeOrigin: true,
        ws: true // websocket proxy 
      }
    }
  },
  configureWebpack: {
    devtool: "source-map"
  },
  transpileDependencies: ["vuetify"]
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