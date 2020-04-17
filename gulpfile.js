let gulp = require("gulp");

const font = require("./gulp/tasks/fonts");
const pug2html = require("./gulp/tasks/pug2html");
const clean = require("./gulp/tasks/clean/clean");
const style = require("./gulp/tasks/style");
const webp = require("./gulp/tasks/img/img_webp");
const svg = require("./gulp/tasks/img/img_svg");
const minPng = require("./gulp/tasks/img/min_png");
const minJpg = require("./gulp/tasks/img/min_jpg");
const serve = require("./gulp/tasks/serve");
const script = require("./gulp/tasks/script");
const cache = require("./gulp/tasks/clearCache");
const svgSprite = require("./gulp/tasks/svgSprite")

gulp.task("img", gulp.parallel(webp, svg, minPng));
gulp.task("page", pug2html);
gulp.task("style", style);
gulp.task("font", font);

//const dev = gulp.parallel();

const build = gulp.parallel(
   pug2html,
   style,
   script,
   font,
   webp,
   svg,
	minPng,
	svgSprite
);

gulp.task("build", gulp.series(clean, cache, build));

// watch sprite, browser sync, readme.

gulp.task("dev", gulp.series(build, serve));

gulp.task("default", gulp.parallel(svgSprite));

//gulp.task('default', "dev");

let Libs = ["node_modules/@fancyapps/**/*.*", "node_modules/jquery/**/*.*"];
gulp.task("getLib", gulp.parallel(fancyBox, jquery, slickCarousel));

//let cssLibs = ["node_modules/@fancyapps/**/*.{css,sass,scss,less}","node_modules/jquery/**/*.{css,sass,scss,less}"]
//function libDist(){
//	return gulp.src()
//}

function fancyBox() {
   return gulp
      .src("node_modules/@fancyapps/**/*.*")
      .pipe(gulp.dest("src/libs/fancy-box"));
}

function jquery() {
   return gulp
      .src("node_modules/jquery/**/*.*")
      .pipe(gulp.dest("src/libs/jquery"));
}

function slickCarousel() {
   return gulp
      .src("node_modules/slick-carousel/**/*.*")
      .pipe(gulp.dest("src/libs/slick-carousel"));
}

//const dev = gulp.series(clean,gulp.parallel(build_pug2html,fonts,styles,webp,svg,minPng));

//const cleanImg = require("./gulp/tasks/clean/cleanImg");
//const cleanFont = require("./gulp/tasks/clean/cleanFont");
//const cleanPage = require("./gulp/tasks/clean/cleanPage");
//const cleanStyle = require("./gulp/tasks/clean/cleanStyle");

//gulp.task("cleanImg", cleanImg);
//gulp.task("img", gulp.series(cleanImg, gulp.parallel(webp, svg, minPng)));
//gulp.task("page", gulp.series(cleanPage, pug2html));
//gulp.task("style", gulp.series(cleanStyle, style));
//gulp.task("font", gulp.series(cleanFont, font));

//module.exports.dev = dev;
//module.exports.build = build;

//gulp.task("css", function () {
//   return gulp
//      .src([
//         "node_modules/normalize.css/normalize.css",
//         "node_modules/slick-carousel/slick/slick.css",
//         //"node_modules/magnific-popup/dist/magnific-popup.css",
//      ])
//      .pipe(concat("libs.css"))
//      .pipe(gulp.dest("src/css"));
//});

//gulp.task("js", function () {
//   return gulp
//      .src([
//         "node_modules/slick-carousel/slick/slick.js",
//         "node_modules/magnific-popup/dist/jquery.magnific-popup.js",
//      ])
//      .pipe(concat("libs.min.js"))
//      .pipe(uglify())
//      .pipe(gulp.dest("src/js"))
//      .pipe(browserSync.reload({ stream: true }));
//});
