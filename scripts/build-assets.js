// Special thanks to Jordy for helping me with this!

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

(function() {
return gulp.src([
    './public/img/*.*',
  ])
  .pipe(imagemin({verbose: true}))
  .pipe(gulp.dest('./dist/img'));
})();

(function() {
  return gulp.src([
      './public/img/splashscreens/*.*',
    ])
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('./dist/img/splashscreens'));
  })();
  
(function() {
  return gulp.src([
      './public/service-worker.js',
      './public/manifest.json',
    ])
    .pipe(gulp.dest('./dist/'));
  })();