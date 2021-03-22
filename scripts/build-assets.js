// Special thanks to Jordy for helping me with this!
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// Minify images > move them to the dist/img folder
(function() {
return gulp.src([
    './public/img/*.*',
  ])
  .pipe(imagemin({verbose: true}))
  .pipe(gulp.dest('./dist/img'));
})();

// Minify splashscreen images > move them to the dist/img/splashscreens folder
(function() {
  return gulp.src([
      './public/img/splashscreens/*.*',
    ])
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('./dist/img/splashscreens'));
  })();
  
// Move the service worker and manifest to the dist folder
(function() {
  return gulp.src([
      './public/service-worker.js',
      './public/manifest.json',
    ])
    .pipe(gulp.dest('./dist/'));
  })();