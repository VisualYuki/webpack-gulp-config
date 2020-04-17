const gulp = require("gulp");
const gulpPngquant = require("gulp-pngquant");


module.exports = function min_png_jpg() {
   let src = "src/img/**/*.png";
   let dest = "dist/min-img";
   return gulp
      .src(src)
      .pipe(
         gulpPngquant({
            quality: "65-75",
         })
      )
      .pipe(gulp.dest(dest));
};
