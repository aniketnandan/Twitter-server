var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var del= require('del');
var watch = require('gulp-watch');

gulp.task('build', function(){
  browserify({
    entries: 'public/components/Router_route.jsx',
    debug: true
  })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('delete',function(){
  del(['public/javascripts/bundle.js']).then(function(){
    console.log("Deleted!!");
  });
});

gulp.task('watch',['delete', 'build'],function(){
  var watcher = gulp.watch('public/components/Router_route.jsx', ['delete', 'build']);
  watcher.on('error', function() {
    console.log('waiting for changes')
  })
  watcher.on('change', function() {
    var d = new Date
    console.log('changed at', d.getHours(), ':', d.getMinutes(), ':', d.getSeconds())
  })
})
