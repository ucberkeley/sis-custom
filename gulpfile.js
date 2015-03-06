var gulp = require('gulp');
var gulpif = require('gulp-if');
var scsslint = require('gulp-scss-lint');

// Is the current build running on travis?
var onTravis = !!process.env.TRAVIS;

var paths = {
  src: {
    scss: 'src/**/*.scss'
  },
  dist: {
    main: 'dist',
    images: 'dist/uc_images'
  }
}

var names = {
  dist: {
    css: 'uc_sis.css'
  }
}

gulp.task('css', function() {
  // Automatically add browser prefixes (e.g. -webkit) when necessary
  var autoprefixer = require('gulp-autoprefixer');
  // Concatenate the files
  var concat = require('gulp-concat');
  // Convert the .scss files into .css
  var sass = require('gulp-sass');

  return gulp.src(paths.src.scss)
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    // Combine the files
    .pipe(concat(names.dist.css))
    // Output to the correct directory
    .pipe(gulp.dest(paths.dist.main));
});

gulp.task('css-lint', function() {
  return gulp.src(paths.src.scss)
    .pipe(scsslint())
    // Only fail the build when running on Travis
    .pipe(gulpif(onTravis, scsslint.failReporter()));
});

gulp.task('lint', ['css-lint']);

gulp.task('default', ['css']);
