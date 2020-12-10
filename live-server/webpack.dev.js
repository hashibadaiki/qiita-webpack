const { merge } = require("webpack-merge");
const commonWebpack = require("./webpack.common");
const path = require("path");

module.exports = merge(commonWebpack, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    open: true,
    port: 9000,
    hot: true,
  },
});

// ホットリロードでなくても良い場合は下記コマンドを実行すればOKです
// その場合↑の hot: true は削除して下さい
// "noHotStart": "webpack-dev-server --config webpack.dev.js",
