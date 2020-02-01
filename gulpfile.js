// import gulp package
let gulp = require('gulp');
let watch = require('gulp-watch');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssvars = require('postcss-simple-vars');
let nested = require('postcss-nested');
let cssImport = require('postcss-import');

// create new task
gulp.task('default', () => {
  console.log('Hooaaray - you created a gulp task.');
});

gulp.task('html', () => {
  console.log("Imagine something usefull being done to your html here");
});

gulp.task('styles', () => {
  // we need to return because gulp.src is a asynchronous function, let gulp that the function is completed.
  return gulp.src('./app/assets/styles/styles.css')
    // apply post css filter here
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
  watch('./app/index.html', gulp.parallel(['html']));

  watch('./app/assets/styles/**/*.css', gulp.parallel(['styles']));
});