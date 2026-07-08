const gulp = require("gulp");
const paths = require("./paths");
const { htmlCssPaths } = paths;
const replace = require("gulp-replace");

function replaceImgPathsTask() {
  return gulp
    .src(htmlCssPaths.src)
    .pipe(replace("/src/img/", "/dist/img/")) // Ищем старый путь
    .pipe(replace("url(../img/", "url(../dist/img/")) // Для CSS иногда нужен другой вариант
    .pipe(gulp.dest(htmlCssPaths.dest));
};

module.exports = replaceImgPathsTask;