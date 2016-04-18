"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

gulp.task("watch", function(){
    gulp.watch("./scss/*.scss", ["sass"]);
    gulp.watch("./js/**/*.js", ["js-uglify"]);
});

// sass
gulp.task("sass", function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
        .pipe(gulp.dest("./css"));
});

// js uglify
gulp.task("js-uglify", function(){
    return gulp.src("./js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["watch"]);
