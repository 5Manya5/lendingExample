const gulp = require("gulp");

const plumber = require("gulp-plumber");
// const fileInclude = require("gulp-file-include"); //собирает файлы из разных частей
const notify = require("gulp-notify");
const paths = require("./paths.js");
const { html } = paths;



const plumberNotify = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: "Error <%= error.message %>",
      sound: false,
    }),
  };
};

function htmlTask() {
  return gulp
    .src([html.src, "!src/html/blocks/*.html"])    
    .pipe(plumber(plumberNotify("HTML")))    
    .pipe(gulp.dest(html.dest));
}

module.exports = htmlTask;
