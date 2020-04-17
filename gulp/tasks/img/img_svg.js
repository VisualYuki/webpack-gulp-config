const gulp = require("gulp");
const svgmin = require("gulp-svgmin");
const newer = require("gulp-newer");

module.exports =  function svg() {
   let src = "src/img/**/*.svg";
   let dist = "dist/img";

   return gulp.src(src,{since: gulp.lastRun(svg)}).pipe(newer(dist)).pipe(svgmin()).pipe(gulp.dest(dist));
}