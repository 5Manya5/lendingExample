const gulp =  require('gulp');
const paths = require('./paths.js');
const { styles } = paths;
const plumber =  require("gulp-plumber"); //предохраняет задачи от остановки
const sourcemaps =  require('gulp-sourcemaps');
const concat =  require('gulp-concat');
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include"); //собирает файлы из разных частей


const plumberNotify = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: "Error <%= error.message %>",
      sound: false,
    }),
  };
};

const fileIncludeSetting = {
  prefix: "@",
  basepath: "@file",
};

 function stylesTask() {
    return gulp
      .src(styles.src)
      .pipe(plumber(plumberNotify("css")))
      .pipe(fileInclude(fileIncludeSetting))
      .pipe(sourcemaps.init()) // 1. Инициализация sourcemaps'
      .pipe(concat('style.min.css'))
      .pipe(sourcemaps.write('../sourcemaps')) // Пишем sourcemaps    
      .pipe(gulp.dest(styles.dest));
};

module.exports = stylesTask;