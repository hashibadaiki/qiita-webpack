const { merge } = require("webpack-merge");
const commonWebpack = require("./webpack.common");
const path = require("path");

module.exports = merge(commonWebpack, {
  mode: "development",
  // わざわざサーバー立てずにコンパイルだけして欲しい場合は watch: true に
  watch: true,
  // ライブで変更が見たい場合は npm run start でいけますが、
  // ファイルが出力されていないのでご注意ください
  // (npm run build || dev しないとファイルは出力されません)
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    open: true,
    port: 9000,
    hot: true,
  },
});
