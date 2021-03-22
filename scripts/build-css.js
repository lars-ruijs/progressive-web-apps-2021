// Special thanks to Jordy for helping me with this!

import gulp from 'gulp';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

// Clean and minify CSS > move to dist/css/styles.css
(function() {
 return gulp.src('./public/css/styles.css')
  .pipe(concat('css/styles.css'))
  .pipe(cleanCSS())
  .pipe(
    autoprefixer({
      cascade: false,
    })
  )
  .pipe(gulp.dest('./dist/'));
})();