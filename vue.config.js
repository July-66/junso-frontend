const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    port: 8101,
    proxy: {
      "/api": {
        // 匹配所有以 '/api'开头的请求路径
        target: "http://43.139.7.202:8102", // 代理目标的基础路径
        changeOrigin: true, //跟服务端说谎，说自己是跟服务端同一域名的
      },
    },
  },
};
