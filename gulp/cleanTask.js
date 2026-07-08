const gulp =  require('gulp');
const clean =  require('gulp-clean');
const fs =  require('fs');


function cleanTask(done) {
  if (fs.existsSync("./dist/")) {
    return gulp.src("./dist/", { read: false })
    .pipe(clean({ force: true }));
    }
  done();
};

module.exports = cleanTask;