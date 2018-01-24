var gulp = require('gulp');
var browsersync= require('browser-sync');

gulp.task('default', function () {
    browsersync.init({
        server: "./app"
    });
    gulp.watch("app/js/*.js").on('change', browsersync.reload);
    gulp.watch("app/*.html").on('change', browsersync.reload);
});