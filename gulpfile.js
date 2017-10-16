const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('css', () => {
    gulp.src(['heart-shape.css','square-shape.css','plum-shape.css','peach-shape.css','poker.css'])
        .pipe(concat('poker.css'))
        .pipe(gulp.dest('./dist'));
});