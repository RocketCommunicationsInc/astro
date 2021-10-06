const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

exports.default = () =>
  gulp
    .src(["./img/*", "./_content/img/*"])
    .pipe(imagemin())
    .pipe(gulp.dest("_site/img"));
