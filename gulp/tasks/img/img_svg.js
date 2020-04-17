const gulp = require("gulp");
const svgmin = require("gulp-svgmin");

module.exports =  function svg() {
   let src = "src/img/**/*.svg";
   let dest = "dist/img";

   return gulp.src(src).pipe(svgmin()).pipe(gulp.dest(dest));
}