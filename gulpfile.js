/*Gulp*/
var gulp = require( 'gulp' );
var debug = require( 'gulp-debug' );
var sourceMaps = require( 'gulp-sourcemaps' );
/*SASS/CSS*/
var sass = require( 'gulp-sass' );
var autoPrefixer = require( 'gulp-autoprefixer' );
var cssMin = require( 'gulp-cssnano' );
/*JS*/
var ts = require( 'gulp-typescript' );
var tsProject = ts.createProject( 'tsconfig.json' );
/*Config*/
var vendorCssFiles = [
    'node_modules/normalize.css/normalize.css'
];
var vendorScriptFiles = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-animate/angular-animate.min.js'
];

gulp.task( 'watch', function() {
    gulp.watch( 'sass/**/*.scss', [ 'css' ] );
    gulp.watch( 'app/**/*.ts', [ 'js' ] );
} );

gulp.task( 'vendorStyles', function() {
    return gulp.src( vendorCssFiles )
        .pipe( debug( {
            title: 'vendorCss'
        } ) )
        .pipe( concat( '_vendor.scss' ) )
        .pipe( gulp.dest( './sass/vendors/' ) );
} );

gulp.task( 'vendorScripts', function() {
    gulp.src( vendorScriptFiles )
        .pipe( debug() )
        .pipe( sourceMaps.init() )
        .pipe( concat( 'vendor.js' ) )
        .pipe( strip() )
        .pipe( sourceMaps.write() )
        .pipe( gulp.dest( './scripts' ) );
} );

gulp.task( 'css', function() {
    return gulp.src( './sass/main.scss' )
        .pipe( debug() )
        .pipe( sourceMaps.init() )
        .pipe( sass()
            .on( 'error', sass.logError ) )
        .pipe( autoPrefixer( {
            browsers: [ 'last 2 versions' ],
            cascade: false
        } ) )
        .pipe( sourceMaps.write() )
        .pipe( gulp.dest( './stylesheets' ) );
} );

gulp.task( 'js', function() {
    return tsProject.src()
        .pipe( debug() )
        .pipe( tsProject() )
        .pipe( sourceMaps.init() )
        .pipe( sourceMaps.write() )
        .pipe( gulp.dest( './scripts' ) );
} );