'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('styles/*.scss')
    .pipe(sass({
        outputStyle: 'compressed',
        includePaths: ['node_modules/susy/sass']
    }).on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('default', ['sass']);
