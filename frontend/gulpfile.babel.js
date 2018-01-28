import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cmq from 'gulp-combine-media-queries'
import rename from 'gulp-rename'
import cssmin from 'gulp-cssmin'
import uglify from 'gulp-uglify'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import imagemin from 'gulp-imagemin'
import gulpIf from 'gulp-if'
import minimist from 'minimist'

const envSettings = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'development'
  }
}

const options = minimist(process.argv.slice(2), envSettings)
const config = {isProduction: options.env === 'production'}

//Default
gulp.task('default', ['watch', 'sass', 'image'])

//sassの監視をして変換処理させる
gulp.task('watch', () => {
  gulp.watch(['./css/**/*.scss'], () => {
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
    .pipe(gulp.dest(gulpIf(config.isProduction, '../public', './dist')))
})

// imageの圧縮
gulp.task('image', () => {
  gulp.src('./dist/images/**/*.+(jpg|jpeg|png|fig|svg)')
    .pipe(imagemin({optimizationLevel: 7}))
    .pipe(gulp.dest(gulpIf(config.isProduction, '../public/assets/images', './dist/assets/images')))
})
