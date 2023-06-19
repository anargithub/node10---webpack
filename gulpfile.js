const gulp = require('gulp');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('scripts', () => {
  return gulp.src('src/js/script.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', () => {
  return gulp.src('src/css/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', () => {
  gulp.watch('src/js/script.js', gulp.series('scripts'));
  gulp.watch('src/index.html', gulp.series('html'));
  gulp.watch('src/css/style.css', gulp.series('styles'));
});

gulp.task('default', gulp.parallel('scripts', 'html', 'styles', 'watch'));