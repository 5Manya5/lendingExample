const gulp = require("gulp");
const browserSync = require("browser-sync");

const paths = require("./gulp/paths.js");

const { html, styles, scripts, fonts, images} = paths;

const cleanTask = require('./gulp/cleanTask.js');
const filesTask = require('./gulp/fontsTask.js');
const fontsTask = require('./gulp/fontsTask.js');
const htmlАssetsTask = require('./gulp/htmlAssetsTask.js');
const htmlTask = require('./gulp/htmlTask.js');
const imagesTask = require('./gulp/imagesTask.js');
const replaceImgPathsTask = require('./gulp/replaceImgPathsTask.js');
const jsTask = require('./gulp/scriptTask.js');
const stylesTask = require('./gulp/stylesTask.js');


browserSync.create();
const serverOptions = {
  server: { baseDir: "./dist" },
  notify: false,
  open:true
};
function serve(cb) {
  browserSync.init(serverOptions);
  gulp
    .watch(styles.src, gulp.series(stylesTask))
    .on("change", browserSync.reload);
  gulp
    .watch(html.src, gulp.series(htmlTask))
    .on("change", browserSync.reload);
  gulp
    .watch(images.src, gulp.series(imagesTask))
    .on("change", browserSync.reload);
  gulp
    .watch(fonts.src, gulp.series(fontsTask))
    .on("change", browserSync.reload);
  gulp
    .watch("./src/files/**/*", gulp.series(filesTask))
    .on("change", browserSync.reload);
  gulp
    .watch(scripts.src, gulp.series(jsTask))
    .on("change", browserSync.reload);
  return cb();
}

exports.build = gulp.series(
  cleanTask,
  gulp.parallel(
    htmlTask,
    stylesTask,
    fontsTask,
    jsTask,
    imagesTask,
  )
);

exports.default = gulp.series(
  exports.build,
  htmlАssetsTask,
  replaceImgPathsTask,
  serve
);