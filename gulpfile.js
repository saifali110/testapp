'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

var assetsDev = 'scss/';
var assetsProd = 'css/';

gulp.task('sass', function () {
    return gulp.src(assetsDev + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
      //  .pipe(cleanCSS())
      //  .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(assetsProd));
});


gulp.task('watch', function () {
    gulp.watch(assetsDev + '*.scss', ['sass']);
});


gulp.task('default', ['watch']);