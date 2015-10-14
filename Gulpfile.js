var gulp = require('gulp');
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename');

//gulp styles run
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./public/css/'));
});

//Watch task
//gulp.task('watch',function() {
    //gulp.watch('sass/**/*.scss',['styles']);
//});