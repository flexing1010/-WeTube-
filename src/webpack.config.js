const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtract = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  devtool: "cheap-source-map",
  mode: MODE,
  plugins: [new MiniCssExtract({ filename: "[name].css" })],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        //look for scss with test
        test: /\.scss$/,
        use: [
          MiniCssExtract.loader,
          "css-loader",
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
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  node: {
    fs: "empty",
    net: "empty",
  },
};

module.exports = config;
