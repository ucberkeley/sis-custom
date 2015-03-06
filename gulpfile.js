var gulp = require('gulp');
var gulpif = require('gulp-if');
var scsslint = require('gulp-scss-lint');

// Is the current build running on travis?
var onTravis = !!process.env.TRAVIS;

gulp.task('css-lint', function() {
  return gulp.src('**/*.scss')
    .pipe(scsslint())
    // Only fail the build when running on Travis
    .pipe(gulpif(onTravis, scsslint.failReporter()));
});

gulp.task('lint', ['css-lint']);

gulp.task('default', ['lint']);
