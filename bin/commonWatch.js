var gulp = require('gulp');
var watch = require('gulp-watch');
var clean = require('gulp-clean');
var ps = require('ps-node');
var _process = process;

var init = () => {
	var commonPath = 'src/js/common';

	watch('../' + commonPath + '/**/*.*', {events: ['add', 'change']}, function (file) {
		var oldPath = file.path.substring(file.path.lastIndexOf(commonPath));
		var newPath = 'mobile/common' + oldPath.substr(commonPath.length);

		newPath = newPath.substr(0, newPath.lastIndexOf("/"));

		console.log(oldPath + " copied to " + newPath);
		gulp.src('../' + oldPath)
			.pipe(gulp.dest('../' + newPath));
	});

	gulp.task('clean-files', function () {
		return gulp.src(['../mobile/common/**/*.*'])
			.pipe(clean());
	});

	gulp.task('copy-files', ['clean-files'], function () {
		gulp.src(['../' + commonPath + '/**/*.*'])
			.pipe(gulp.dest('../mobile/common'));
	});

	gulp.start('copy-files');
};


ps.lookup({
	command: 'node',
}, function (err, resultList) {
	if (err) {
		throw new Error(err);
	}

	resultList.forEach(function (process) {
		if (process) {
			if (process.pid != _process.pid && process.arguments.length && process.arguments[0].indexOf("commonWatch") != -1) {
				console.log("Watch already running, goodbye!");
				_process.exit();
			} else {
				init();
			}
		}
	});
});
