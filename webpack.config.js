// react_start/webpack.config.js
const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "webpack-install-test",
  mode: "development",
  devtool: "eval",
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
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 chrome versions"], // 크롬 버전 호환
                },
              },
            ],
            "@babel/preset-react",
          ],
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
  devServer: {
    port: 8080,
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
