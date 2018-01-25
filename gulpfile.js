var gulp = require('gulp');
var browsersync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default',['css'], function () {
    browsersync.init({
        server: "./app"
    });
    gulp.watch("app/js/*.js").on('change', browsersync.reload);
    gulp.watch("scss/**/*.scss", ['css']);
    gulp.watch("app/*.html").on('change', browsersync.reload);
});

gulp.task('css', function () {
    return gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('app/css/'))
        .pipe(browsersync.stream());
});
