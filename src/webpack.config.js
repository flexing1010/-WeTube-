const webpack = require("webpack");
const path = require("path");

const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const MiniCssExtract = require("mini-css-extract-plugin");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  devtool: "source-map",
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        //look for scss with test
        test: /\.(scss)$/,
        use: [
          { loader: MiniCssExtract.loader },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [[autoprefixer, { browsers: "cover 99.5%" }]],
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "static"),
    filename: "[name].js",
  },
  node: {
    fs: "empty",
    net: "empty",
  },
  plugins: [
    new MiniCssExtract({ filename: "styles.css" }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};

module.exports = config;
