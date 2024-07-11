function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('all.js'))
        .pipe(terser())
        .pipe(gulp.dest(paths.scripts.dest));
}