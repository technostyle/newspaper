const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js"
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(mp4|jpeg)$/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    modules: ["app", "assets", "node_modules"],
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./assets/img/favicon.jpeg",
      filename: "index.html",
      template: "./app/index.html"
    })
  ]
};
