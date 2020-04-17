const gulp = require("gulp");
const pug = require("gulp-pug");
const htmlValidator = require("gulp-w3c-html-validator");
const pugLinter = require("gulp-pug-linter");
const plumber = require("gulp-plumber");
//посмотреть pug linter

module.exports = function build_pug2html() {
   return gulp
      .src("src/pug/pages/**/*.pug")
      .pipe(plumber())
      .pipe(pugLinter({ reporter: "default" }))
      .pipe(
         pug({
            pretty: true,
         })
      )
      .pipe(htmlValidator())
      .pipe(gulp.dest("dist/pages"));
};
