var gulp = require('gulp'),
connect = require('gulp-connect');

var serveConfig ={
    root:'./',
    port:8081,
    livereload:true
}

gulp.task('watch',function () {
    gulp.watch('./*.html',['html']);
})

gulp.task('connect',function () {
    connect.server(serveConfig);
})

gulp.task('html',function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
})

gulp.task('default',['connect','watch']);