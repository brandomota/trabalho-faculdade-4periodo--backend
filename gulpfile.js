/* jshint esversion: 6 */
const gulp = require('gulp');
const develop = require('gulp-develop-server');

gulp.task('run', ()=>{
    develop.listen({'path':'bin/www'});
});