const gulp = require('gulp');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');

// Задача для минификации и сжатия JavaScript файлов
gulp.task('scripts', () => {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Задача для минификации HTML файлов
gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Задача для автоматического добавления вендорных префиксов в CSS файлы
gulp.task('styles', () => {
  return gulp.src('src/css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

// Задача для отслеживания изменений файлов и автоматической пересборки
gulp.task('watch', () => {
  gulp.watch('src/js/*.js', gulp.series('scripts'));
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('src/css/*.css', gulp.series('styles'));
});

// Задача по умолчанию, которая выполняет все задачи одновременно
gulp.task('default', gulp.parallel('scripts', 'html', 'styles', 'watch'));