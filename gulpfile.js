var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

gulp.task('css-lint', function() {
  return gulp.src('**/*.scss')
    .pipe(scsslint());
});

gulp.task('lint', ['css-lint']);
