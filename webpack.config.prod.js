const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");
const path = require("path");

// TODO make this path be dinamic!
dotenv.config({ path: "./io-game-client/.env" });

const project = {
  path: process.env.PROJECT_PATH,
  title: process.env.PROJECT_TITLE
};

const htmlWebpackPluginConfig = {
  "title": `${project.title}`,
  "meta": {
    "viewport": "initial-scale = 1.0, maximum-scale = 1.0, user-scalable=no",
    "Content-Type": { "http-equiv": "Content-Type", "content": "text/html; charset=utf-8" }
  },
  "filename": "index.html",
  "template": `${project.path}/template/index.html`
};

const CopyPluginConfig = [{
  from: `./${project.path}/assets/`,
  to: `./assets/`,
}];

module.exports = {
  mode: "production",
  entry: `./${project.path}/index.js`,
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, `./dist/client/`)
  },
  plugins: [
    new HtmlWebpackPlugin(htmlWebpackPluginConfig),
    new CopyPlugin(CopyPluginConfig)
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};