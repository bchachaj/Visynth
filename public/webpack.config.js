var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./public/app/js/index.js",
  output: {
    path: path.resolve(__dirname, 'public', 'app', 'js'),
    filename: "bundle.js"
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
