const gulp = require("gulp");
var imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

module.exports = function min_jpg () {
	let src = "src/img/**/*.{jpeg,jpg}";
	let dist = "dist/min-img";

	return gulp
		.src(src, {since: gulp.lastRun(min_jpg)})
		.pipe(newer(dist))
		.pipe(
			imagemin()
		)
		.pipe(gulp.dest(dist));
};


