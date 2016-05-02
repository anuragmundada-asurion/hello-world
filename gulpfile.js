var gulp = require('gulp');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');

gulp.task('scripts', function() {
  return gulp.src(['first.js', 'second.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('webserver', function(){
	return gulp.src('./').pipe(webserver({
		port: '8000',
		livereload: true,
		open: true,
		fallback: 'index.html'
	}))
});

gulp.task('default', ['scripts', 'webserver']);