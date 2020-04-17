const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const less = require("gulp-less");
const sourcemaps = require("gulp-sourcemaps");
const shorthand = require("gulp-shorthand");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const gulpif = require("gulp-if");

module.exports = function styles() {
   let src = "src/less/main.less";
   let dest = "dist/css";

   let isDev = true;
   let isProd = !isDev;

   return gulp
      .src(src)
      .pipe(plumber())
      .pipe(gulpif(isProd, sourcemaps.init()))
      .pipe(less())
		.pipe(gulpif(isProd,autoprefixer()))
      .pipe(gulpif(isProd, shorthand()))
      .pipe(
         gulpif(
            isProd,
            cleanCSS(
               {
                  level: 2,
               },
               (details) => {
                  console.log(
                     `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
                  );
               }
            )
         )
      )
      .pipe(gulpif(isProd, sourcemaps.write()))
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(dest));
};
