let gulp = require('gulp');
let svgSprite = require('gulp-svg-sprite');
let rename = require('gulp-rename');

let config = {
  mode: {
    css: {
      // generate css
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteCSS', function() {
  return gulp.src('./app/temp/sprite/css/*.css')
          .pipe(rename('_sprite.css'))
          .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', gulp.parallel(['createSprite', 'copySpriteCSS']));