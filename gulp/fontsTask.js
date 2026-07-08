const gulp = require("gulp");
const paths = require("./paths.js");
const { fonts } = paths;

function fontsTask() {
  return gulp
    .src(fonts.src)
    .pipe(gulp.dest(fonts.dest));
};

module.exports = fontsTask;