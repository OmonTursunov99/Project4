// npm i gulp gulp-rigger gulp-sass gulp-autoprefixer gulp-watch browser-sync --save-dev
var gulp = require('gulp');
var rigger = require('gulp-rigger');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
});
gulp.task('css', function () {
    return gulp.src('app/css/**/*.css')
        .pipe(rigger())
        .pipe(gulp.dest('build/css/'))
        .pipe(reload({stream: true}));
});
gulp.task('img', function () {
    return gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('build/img/'))
        .pipe(reload({stream: true}));
});
gulp.task('js', function () {
    return gulp.src('app/js/**/*.*')
        .pipe(rigger())
        .pipe(gulp.dest('build/js/'))
        .pipe(reload({stream: true}));
});
gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts/'))
        .pipe(reload({stream: true}));
});
gulp.task('sass', function () {
    return gulp.src('app/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function () {

    browserSync({
        server: {
            baseDir: 'build'
        },
        // tunnel: true,
        host: 'localhost',
        port: '3000',
        logPrefix: 'my-template'
    });

    gulp.watch('app/**/*.html', gulp.series('html'));
    gulp.watch('app/css/**/*.css', gulp.series('css'));
    gulp.watch('app/img/**/*.*', gulp.series('img'));
    gulp.watch('app/js/**/*.*', gulp.series('js'));
    gulp.watch('app/css/**/*.scss', gulp.series('sass'));
});
gulp.task('default', gulp.series('watch'));
