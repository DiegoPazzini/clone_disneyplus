const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*') //**serve para acessar a pasta scr e imagens  e outro /* serve para pegar os arquivos dentro desta pasta// 
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}


exports.default = gulp.parallel(styles, images);

exports.watch= function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}









