// react_start/webpack.config.js
const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "webpack-install-test",
  mode: "development",
  devtool: "eval",
  devServer: {
    port: 8080,
    static: { directory: path.resolve(__dirname) },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    "js/app": ["./client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
};
