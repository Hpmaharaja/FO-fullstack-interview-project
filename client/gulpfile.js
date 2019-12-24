/* ===================================================================
 * Gulpfile.js
 *  This is the main gulpfile through which different configurations
 *  are pulled and managed for the TrueSolution ERS.
 * ------------------------------------------------------------------- */

var gulp = require('gulp');
var run = require('gulp-run');
var watch = require('gulp-watch');
var { src, dest} = require('gulp');


function defaultTask(cb) {
  // place code for your default task here
  cb();
}

/* ---
* SERVER
* --- */
// The configurations file needs to be configured.

// Less Compilations
gulp.task('less', function() {
  return run('lessc ./src/public/styles/less/style.less ./src/public/styles/css/main.css --clean-css').exec();
});

gulp.task('watch', function() {
  return watch(['./src/public/styles/less/**/**', './src/components/**/**'], function() {
    return run('lessc ./src/public/styles/less/style.less ./src/public/styles/css/main.css --clean-css').exec();
  });
});

exports.default = defaultTask
