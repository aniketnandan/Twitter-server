var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var del= require('del');
var watch = require('gulp-watch');

//gulp.task('default', ['delete','build']);

gulp.task('delete',function(){
  del(['public/javascripts/concat.js']).then(function(){
    console.log("Deleted!");
  });
});

gulp.task('build', function(){
  browserify({entries: 'public/components/Router_route.jsx'})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/javascripts'));
  console.log("builded");
});
