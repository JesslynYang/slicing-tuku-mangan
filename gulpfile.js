const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('tuku-mangan/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['tuku-mangan/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)