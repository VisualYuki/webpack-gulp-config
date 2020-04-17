//const imagemin = require("gulp-imagemin");
//const webpPlugin = require("imagemin-webp");
//const extReplace = require("gulp-ext-replace");
//const gulpPngquant = require("gulp-pngquant");
const gulp = require("gulp");
const gulpWebp = require("gulp-webp");

let src = "src/img/**/*.{png,jpg,jpeg}";
let dest = "dist/img";

module.exports = function imgWebp() {
   let src = "src/img/**/*.{png,jpg,jpeg}";
   let dest = "dist/img";
   return gulp.src(src).pipe(gulpWebp()).pipe(gulp.dest(dest));
};
