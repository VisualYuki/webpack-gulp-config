const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

module.exports = function min_jpg () {
	let src = "src/img/**/*.{jpeg,jpg}";
	let dest = "dist/min-img";

	return gulp
		.src(src)
		.pipe(
			imagemin({
				progressive: true,
			})
		)
		.pipe(gulp.dest(dest));
};


