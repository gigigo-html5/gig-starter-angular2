'use strict';

const gulp          = require('gulp');
const config        = require('../config');
const browserSync   = require('browser-sync').create();

// Static server
gulp.task('server', ['watch'], function() {
    browserSync.init({
        server: {
            baseDir: config.paths.dist,
            port: 8000
        }
    });


    gulp.watch(config.paths.src+'/assets/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch(config.paths.src+'/app/**/*.html', ['bundle']).on('change', browserSync.reload);
    gulp.watch(config.paths.src+'/*.html', ['html']).on('change', browserSync.reload);
    gulp.watch(config.paths.dist+'/*').on('change', browserSync.reload);
});
