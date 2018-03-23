var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    browserSync.init({
        proxy: "http://russenfrance.com/search/ad?region=provence-alpes-cote-dazur",
        reloadDelay: 1000
    });

    gulp.watch('./*.css').on('change', browserSync.reload);
});