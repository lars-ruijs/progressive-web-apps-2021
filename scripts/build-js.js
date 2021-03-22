import gulp from 'gulp';
import minifyJS from 'gulp-uglify';
import concat from 'gulp-concat';

(function() {
return gulp
  .src([
    './public/js/script.js',
  ])
  .pipe(minifyJS())
  .pipe(concat('js/script.js'))
  .pipe(gulp.dest('./dist/'));
})();