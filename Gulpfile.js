const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');

const input = './src/scss/**/*.scss';
const output = './dist/css';

const jsInput = './src/main.js';
const jsOutput = './dist/js';

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

const autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', () => {
  return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output))
});

gulp.task('js', () => {
  return gulp
    .src(jsInput)
    .pipe(babel({
      presets: ['es2015', {compact: true}]
    }))
    .pipe(gulp.dest(jsOutput));
})

gulp.task('watch', function () {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch([jsInput, input], ['js', 'sass'])
    // .watch(input, ['sass'])
    // .watch(jsInput, ['js'])
    // When there is a change,
    // log a message in the console
    .on('change', (event) => {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


gulp.task('prod', ['js'], () => {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});

gulp.task('default', ['js', 'sass', 'watch']);