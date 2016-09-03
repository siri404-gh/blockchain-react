var os = require('os');
var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var liveReload = require('gulp-livereload');
var open = require('gulp-open');
var less = require('gulp-less');
var path = require('path');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var variables = require('../variables');
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

var dest = variables.dest;

gulp.task('browserify', function(){
    browserify('./src/js/app.js')
    .transform('reactify')
    .bundle()
    .pipe(source('app.js'))
    // .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest(dest+'/js'))
    .pipe(liveReload());
});

gulp.task('less', function () {
    return gulp.src('./src/css/style.less')
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(dest+'/css'));
});

gulp.task('copy', function(){
    gulp.src('./src/*.html').pipe(gulp.dest(dest));
    gulp.src('./src/css/**/*.*').pipe(gulp.dest(dest+'/css'));
    gulp.src('./src/fonts/**/*.*').pipe(gulp.dest(dest+'/fonts'));
    gulp.src('./src/images/*.*').pipe(gulp.dest(dest+'/images'));
    gulp.src('./src/js/vendor/*.*').pipe(gulp.dest(dest+'/js/vendor'));
});

gulp.task('open', function(){
    var options = {
        uri: variables.client+':'+variables.port,
        app: browser
    };
    gulp.src(__filename)
        .pipe(open(options));
});

gulp.task('default',  ['browserify', 'less', 'copy'], function() {
    // liveReload.listen();
    // gulp.watch('./src/**/*.*', ['browserify', 'less', 'copy']);
});
