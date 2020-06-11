var gulp = require('gulp');
var sass = require('gulp-sass');
var bsync = require('browser-sync').create();


gulp.task('default', function() {
    bsync.init({
        server: ''
    });

    gulp.watch('*.html').on('change', bsync.reload);
    gulp.watch('sass/*.scss')
        .on('change', gulp.series('launch-sass'))    
});
    
// придумать адекватное название
gulp.task('launch-sass', function() {
return gulp.src('./sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(bsync.stream());
});