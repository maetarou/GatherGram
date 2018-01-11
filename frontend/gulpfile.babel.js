import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cmq from 'gulp-combine-media-queries'
import rename from 'gulp-rename'
import cssmin from 'gulp-cssmin'
import uglify from 'gulp-uglify'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

//Default
gulp.task('default', ['sass'])

//sassの監視をして変換処理させる
gulp.task('watch', () => {
  gulp.watch(['./css/**'], () => {
    gulp.start(['sass'])
  })
})

//sassをcssに変換
gulp.task("sass", () => {
  gulp.src("./css/**/*.scss")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'IOS >= 8.1', 'Android >= 4.4'],
      cascade: false
    }))
    // index.js 152行目をCommentOutして使う
    // .pipe(cmq())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    // .pipe(gulp.dest("../public"))
    .pipe(gulp.dest("./dist"))
})
