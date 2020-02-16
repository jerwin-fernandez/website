let gulp = require('gulp');
let imageMin = require('gulp-imagemin');
let del = require('del');
let usemin = require('gulp-usemin');
let rev = require('gulp-rev');
let cssnano = require('gulp-cssnano');
let uglify = require('gulp-uglify');
let browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs'
    }
  });
});

gulp.task('deleteDistFolder', function() {
  return del('./docs');
})

gulp.task('optimizeImages', function() {
  return gulp.src('./app/assets/images/**/*')
    .pipe(imageMin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images/'))
})

gulp.task('usemin', function(){
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function(){ return rev() }, function(){ return cssnano() }],
      js: [function(){ return rev() }, function(){ return uglify() }]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', gulp.series(['deleteDistFolder', 'optimizeImages', 'styles', 'scripts', 'usemin']));