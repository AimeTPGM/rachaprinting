'use strict'

/**
* More info: https://css-tricks.com/gulp-for-beginners/
**/
 
const gulp = require('gulp')
const sass = require('gulp-sass')
const jade = require('gulp-jade')
const connect = require('gulp-connect')
const livereload = require('gulp-livereload')
const browserSync = require('browser-sync').create()

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'http://localhost:3000'
    ,
  })
})

gulp.task('reloadHTML', ['index', 'jade'], function(){
  browserSync.reload()
})

gulp.task('reloadSASS', ['font', 'sass'], function(){
  browserSync.reload()
})

gulp.task('reloadJS', ['js', 'controller', 'service'], function(){
  browserSync.reload()
})

gulp.task('reloadImg', ['img'], function(){
  browserSync.reload()
})

gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css'))
})

gulp.task('js', function(){
  return gulp.src('./src/assets/js/**/*.js')
  .pipe(gulp.dest('./public/assets/js'))
})

gulp.task('controller', function(){
  return gulp.src('./src/assets/js/controllers/**/*.js')
  .pipe(gulp.dest('./public/assets/js/controllers'))
})

gulp.task('service', function(){
  return gulp.src('./src/assets/js/services/**/*.js')
  .pipe(gulp.dest('./public/assets/js/services'))
})

gulp.task('font', function(){
  return gulp.src('./src/assets/fonts/**/*.*')
  .pipe(gulp.dest('./public/assets/fonts'))
})

gulp.task('index', function(){
  return gulp.src('./src/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('public'))
})

gulp.task('jade', function(){
  return gulp.src('./src/views/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('public/views'))
})

gulp.task('img', function(){
  return gulp.src('./src/assets/img/*.*')
  .pipe(gulp.dest('public/assets/img'))
})
 
gulp.task('watch', ['browserSync', 'index', 'jade', 'font', 'sass', 'js', 'controller', 'service', 'img'], function () {
  gulp.watch('./src/assets/sass/**/*.sass', ['reloadSASS'])
  gulp.watch('./src/assets/fonts/**/*.*', ['reloadSASS'])
  gulp.watch('./src/assets/js/**/*.js', ['reloadJS'])
  gulp.watch('./src/assets/fonts/controllers/**/*.*', ['reloadJS'])
  gulp.watch('./src/assets/fonts/services/**/*.*', ['reloadJS'])
  gulp.watch('./src/*.jade', ['reloadHTML'])
  gulp.watch('./src/views/**/*.jade', ['reloadHTML'])
  gulp.watch('./src/assets/img/*.*', ['reloadImg'])
})

