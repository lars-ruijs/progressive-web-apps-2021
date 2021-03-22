// Special thanks to Jordy for helping me with this!
import gulp from 'gulp';
import minifyJS from 'gulp-uglify';

// Minify script.JS and move it to dist/js
(function() {
return gulp
  .src([
    './public/js/script.js',
  ])
  .pipe(minifyJS())
  .pipe(gulp.dest('./dist/js/'));
})();