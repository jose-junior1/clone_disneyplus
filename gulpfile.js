const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    console.log('Compilando SCSS para CSS...')
    return gulp.src('./src/styles/main.scss')
    .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};

function images() {
    console.log('Minificando imagens...')
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
};

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
};