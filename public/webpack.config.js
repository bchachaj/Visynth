var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./app/js/index.js",
  output: {
    path: path.resolve(__dirname, 'app', 'js'),
    filename: "bundle.js"
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
