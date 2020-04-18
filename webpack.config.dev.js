const dotenv = require("dotenv");
const path = require("path");

// TODO make this path be dinamic!
dotenv.config({ path: "./io-game-client/.env" });

const project = {
  path: process.env.PROJECT_PATH,
  port: process.env.PROJECT_PORT
};

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: `./${project.path}/index.js`,
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, `./dist/client/`)
  },
  devServer: {
    contentBase: path.join(__dirname, `./dist/client/`),
    compress: false,
    port: project.port
  },
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
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  }
};