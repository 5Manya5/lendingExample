const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const path = require("path");

const paths = require("./paths.js");
const { scripts } = paths;

const plumberNotify = (title) => ({
  errorHandler: notify.onError({
    title: title,
    message: "Error <%= error.message %>",
    sound: false,
  }),
}); 

const webpackConfig = {
  mode: "production",
  devtool: "source-map", // sourcemaps от Webpack
  entry: path.resolve(__dirname, '../src/scripts', "index.js"), // входной файл
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, '../', scripts.dest), // обязательно!
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json"],
  },
};

function jsTask() {
  return gulp
    .src(scripts.src)
    .pipe(plumber(plumberNotify("JS")))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(scripts.dest));
}

module.exports = jsTask;
