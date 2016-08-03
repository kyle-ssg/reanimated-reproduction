var gulp = require('gulp');
var watch = require('gulp-watch');
var clean = require('gulp-clean');

var commonPath = 'src/js/common';

watch('../' + commonPath + '/**/*.*', { events: ['add', 'change'] }, function (file) {
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
