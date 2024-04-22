var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

// Tarefa para compilar o SASS
gulp.task('sass', function() {
    return gulp.src('src/scss/styles.scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/styles.css'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/images/'));
});

// Tarefa para comprimir JavaScript
gulp.task('compress', function() {
    return gulp.src('src/js/script.js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/js/script.js'));
});

var sass = require('gulp-sass')(require('sass'));

// Tarefa padrão quando você executa 'gulp' no terminal
gulp.task('default', gulp.series('sass', 'imagemin', 'compress'));