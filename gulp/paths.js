const paths = {
  html: {
    src: "src/**/*.html",
    dest: "dist/",
  },
  styles: {
    src: "src/styles/**/*.css",
    dest: "dist/styles/",
  },
  scripts: {
    src: "src/scripts/**/*.js",
    dest: "dist/scripts/",
  },
  fonts: {
    src:"src/fonts/*.ttf",
    dest: "dist/fonts",
  },
  images: {
    src:"src/img/**/*",
    dest: "dist/img/",
  },
  htmlCssPaths: {
  src: ['dist/**/*.html', 'dist/**/*.css'],
  dest: 'dist',                              
  }
};

module.exports = paths;