const gulp = require('gulp');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const jsImport = require('gulp-js-import');
const sourcemaps = require('gulp-sourcemaps');
const htmlPartial = require('gulp-html-partial');
const clean = require('gulp-clean');
const nodemon = require('nodemon');
const isProd = process.env.NODE_ENV === 'prod';


function nodeMonServe() {
    nodemon({
        script: 'src/server.js',
        ext: 'js',
        env: {
            NODE_ENV: 'dev',
            PORT: 9080
        },
        ignore: ['./node_modules/**']
    });
};

const htmlFile = [
    'src/*.html',

]

function html() {
    return gulp.src(htmlFile)
        .pipe(htmlPartial({
            basePath: 'src/partials/'
        }))
        .pipe(gulpIf(isProd, htmlmin({
            collapseWhitespace: true
        })))
        .pipe(gulp.dest('docs'));
}

function css() {
    return gulp.src('src/sass/style.scss')
        .pipe(gulpIf(!isProd, sourcemaps.init()))
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(gulpIf(!isProd, sourcemaps.write()))
        .pipe(gulpIf(isProd, cssmin()))
        .pipe(gulp.dest('docs/css/'));
}

function js() {
    return gulp.src('src/js/*.js')
        .pipe(jsImport({
            hideConsole: true
        }))
        .pipe(concat('all.js'))
        .pipe(gulpIf(isProd, uglify()))
        .pipe(gulp.dest('docs/js'));
}

function img() {
    return gulp.src('src/img/*')
        .pipe(gulpIf(isProd, imagemin()))
        .pipe(gulp.dest('docs/img/'));
}


function watchFiles() {
    gulp.watch('src/**/*.html', gulp.series(html));
    gulp.watch('src/**/*.scss', gulp.series(css));
    gulp.watch('src/**/*.js', gulp.series(js));
    gulp.watch('src/img/**/*.*', gulp.series(img));

    return;
}

function del() {
    return gulp.src('docs/*', {read: false})
        .pipe(clean());
}


exports.css = css;
exports.html = html;
exports.js = js;
exports.del = del;
exports.nodeMonServe = nodeMonServe;
exports.serve = gulp.parallel(html, css, js, img, watchFiles, nodeMonServe);
exports.default = gulp.series(del, html, css, js, img);