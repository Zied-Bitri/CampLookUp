
var path = require("path");
var SRC_DIR = path.join(__dirname, "/Front-end/src");
var DIST_DIR = path.join(__dirname, "/Front-end/public");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
