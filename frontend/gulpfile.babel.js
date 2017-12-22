import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cmq from 'gulp-combine-media-queries'
import rename from 'gulp-rename'
import cssmin from 'gulp-cssmin'
import uglify from 'gulp-uglify'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
// webpack.configの読み込み
import webpackConfig from './webpack.config'

//Default
gulp.task('default', ['watch', 'sass', 'js'])

//sassの監視をして変換処理させる
gulp.task('watch', () => {
  gulp.watch(['./src/**'], () => {
    gulp.start(['js'])
  })

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
    .pipe(gulp.dest("../public"))
})

// reactをbuild
gulp.task("js", () => {
  gulp.src("./src/**")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("../public"))
})
