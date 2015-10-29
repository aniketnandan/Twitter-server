'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');//vinyl-source-stream convert the readable stream you get from browserify into a vinyl stream that is what gulp is expecting to get.
var babelify = require('babelify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var del= require('del');
var watch = require('gulp-watch');
var eslint = require('gulp-eslint');
var watchify = require('watchify');

gulp.task('build',function(){
  buildFile();
  console.log("Builded");
});

function buildFile(){
  var b = browserify({
    entries: 'public/components/Router_route.jsx',
    debug: true
  });
  b = watchify(b);
  b.on('update',function(){
    lintFile(b);
  });
};

function bundleShare(b){
  b.transform(babelify())
   .bundle()
   .pipe(source('bundle.js'))
   .pipe(gulp.dest('public/javascripts'));
};

gulp.task('lint',function(){
  lintFile();
});

function lintFile(b){
  return gulp.src(['public/components/*.jsx'])
    .pipe(eslint())
    .pipe(eslint.format());
  if(b){
    bundleShare(b);
  }
}

gulp.task('delete',function(){
  del(['public/javascripts/bundle.js']).then(function(){
    console.log("Deleted!!");
  });
});

gulp.task('watch',function(){
  var watcher = gulp.watch('public/components/*.jsx', ['delete', 'build']);
  watcher.on('error', function() {
    console.log('waiting for changes')
  })
  watcher.on('change', function() {
    var d = new Date
    console.log('changed at', d.getHours(), ':', d.getMinutes(), ':', d.getSeconds())
  })
})
