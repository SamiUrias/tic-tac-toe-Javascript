/**
 * Created by samuel on 26/07/16.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

//Creates the server
gulp.task('connect', function(){
    connect.server({
        root: 'public',
        livereload: true
    });
});

//Compile scss
gulp.task('sass', function () {
    console.log("Making sass");
    return gulp.src('./sass/*.scss')
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest('./public/css'));

});

//Reloads the default browser
gulp.task('livereload', function () {
    console.log("Live reload");
    gulp.src('./public/**/*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);