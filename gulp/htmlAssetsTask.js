const gulp =  require('gulp');
const useref =  require('gulp-useref');
const gulpif =  require('gulp-if');
const plumber = require("gulp-plumber");
const cleanCSS =  require('gulp-clean-css');


function htmlАssetsTask() {
    return gulp
        .src('src/**/*.html')
        .pipe(plumber())
        .pipe(useref())
        // .pipe(gulpif('*.js', terser()))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulp.dest('dist/'));
};

module.exports = htmlАssetsTask;