const gulp = require('gulp')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', ['css', 'js'])

gulp.task('watch', () => {
    gulp.watch('./css/app.css', ['css'])
    gulp.watch('./js/picker.js', ['js'])
})

gulp.task('css', () =>
    gulp
        .src('./css/app.css')
        .pipe(
            csso({
                restructure: true,
                sourceMap: false,
                debug: false,
            })
        )
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./css/'))
)

gulp.task('js', () =>
    gulp
        .src('./js/picker.js')
        .pipe(
            babel({
                presets: ['@babel/preset-env'],
            })
        )
        .pipe(uglify())
        .pipe(rename('picker.min.js'))
        .pipe(gulp.dest('./js/'))
)
