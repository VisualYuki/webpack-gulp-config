const gulp = require("gulp");
const eslint = require("gulp-eslint");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const gulpif = require("gulp-if");

let isDev = true;
let isProd = !isDev;

module.exports = function script() {
   return gulp
      .src("src/js/main.js")
      .pipe(gulpif(isProd, eslint()))
      .pipe(gulpif(isProd, eslint.format()))
      .pipe(gulpif(isProd, sourcemaps.init()))
      .pipe(
         gulpif(
            isProd,
            babel({
               presets: ["@babel/env"],
            })
         )
      )
      .pipe(gulpif(isProd, terser()))
      .pipe(gulpif(isProd, sourcemaps.write()))
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("dist/js"));
};
