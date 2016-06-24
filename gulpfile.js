var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var tslint = require('gulp-tslint');

var tsFiles = ['*.ts', 'src/**/*.ts'];
var tsConfig = {
    noImplicitAny: false,
    out: 'bundle.js',
    removeComments: true
};

gulp.task('default', ['tsc', 'templates']);

gulp.task('tsc', function() {
    
    return gulp.src(tsFiles)
        .pipe(tslint())
        .pipe(tslint.report("verbose"))
        .pipe(ts(tsConfig))
        .pipe(gulp.dest('public/js'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('public/js'));
        
});

gulp.task('templates', function(){
    return gulp.src(['src/**/*.html'])
        .pipe(gulp.dest('public'));
});

