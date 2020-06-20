const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
  return gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,
      presets: ["env"]
    }))
    .pipe(uglify())
    .on('error', error => console.log(error))
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
}
function fim(cb){
  console.log('Fim!!')
  return cb()
}
module.exports.default = parallel(padrao, fim)