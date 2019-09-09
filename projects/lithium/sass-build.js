'use strict';

const Fiber = require('fibers');
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const gap = require('gulp-append-prepend');

sass.compiler = require('sass');

gulp.task('sass', () =>
  gulp.src('./**/*.scss', { base: './' })
    .pipe(sass({ fiber: Fiber, outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename(path => path.extname = '.css.ts'))
    .pipe(gap.prependText("import { css } from 'lit-element';\n/* tslint:disable */\nexport const styles = css`"))
    .pipe(gap.appendText('`;'))
    .pipe(gulp.dest(file => file.base))
);

gulp.task('sass:watch', () => gulp.watch('./**/*.scss', gulp.series('sass')));
