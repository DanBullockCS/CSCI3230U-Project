module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8081",
        changeOrigin: true,
        ws: true
      }
    }
  },
  configureWebpack: {
    devtool: "source-map"
  },
  transpileDependencies: ["vuetify"]
};
