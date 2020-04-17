const gulp = require("gulp");

const webp = require("./img/img_webp");
const svg = require("./img/img_svg");
const minPng = require("./img/min_png");
const style = require("./style");
const pug2html = require("./pug2html");
const script = require("./script");

const server = require("browser-sync").create();

module.exports = function serve(cb) {
   server.init({
      server: {
         baseDir: "dist",
         directory: true,
      },
      open: true,
      port: 3000,
   });

   gulp.watch("src/img/**/*.{png,jpg,webp}", gulp.series(webp));

   gulp.watch("src/img/**/*.svg", gulp.series(svg));
   gulp
      .watch("src/img/**/*.png", gulp.series(minPng))
      .on("change", server.reload);
   gulp.watch("src/less/**/*.less", style);
	gulp.watch("src/pug/**/*.pug", pug2html);
	
	gulp.watch("src/js/main.js", script);


   gulp.watch("dist/pages/**/*.html").on("change", server.reload);
   gulp.watch("dist/css/**/*.css").on("change", server.reload);
   gulp.watch("dist/img/**/*.{png,jpg,webp,svg}").on("change", server.reload);
   gulp.watch("dist/js/**/*.js").on("change", server.reload);
   //gulp
   //   .watch("src/js/**/*.js", gulp.series(script))
   //	.on("change", server.reload);

   return cb();
};
