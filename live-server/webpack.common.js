const path = require("path");

module.exports = {
  entry: {app:"./src/js/app.js"},
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
};
