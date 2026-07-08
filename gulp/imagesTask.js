const gulp = require("gulp");
const paths = require("./paths.js");
const { images } = paths;

function imagesTask() {
  return gulp.src(images.src, { encoding: false }).pipe(gulp.dest(images.dest));
};


module.exports = imagesTask;