const gulp =  require('gulp');
const fileInclude = require('gulp-file-include');
const changed = require('gulp-changed');

const fileIncludeSetting = {
  prefix: "@",
  basepath: "@file",
};

function filesTask() {
    return gulp
    .src("./src/files/**/*.css")
    .pipe(changed("./dist/files/"))
    .pipe(fileInclude(fileIncludeSetting))
    .pipe(gulp.dest("./dist/files/"));  
};
module.exports = filesTask;