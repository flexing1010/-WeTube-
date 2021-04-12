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
                plugins: [
                  ["autoprefixer", { overrideBrowserslist: "cover 99.5%" }],
                ],
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "static"),
  },
  plugins: [new MiniCssExtract({ filename: "styles.css" })],
};

module.exports = config;
