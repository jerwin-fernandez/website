let gulp = require('gulp');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', gulp.parallel(['styles', 'cssInject']));

  watch('./app/assets/scripts/**/*.js', gulp.parallel([ 'scripts' ,'scriptsRefresh']));
});

gulp.task('cssInject', function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', function(){
  browserSync.reload();
})
