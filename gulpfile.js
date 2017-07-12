/*Gulp*/
var gulp = require( 'gulp' );
var webserver = require( 'gulp-webserver' );
/*SASS/CSS*/
var sass = require( 'gulp-sass' );
var autoPrefixer = require( 'gulp-autoprefixer' );
var cssMin = require( 'gulp-cssnano' );
/*JS*/
var ts = require( 'gulp-typescript' );
var tsProject = ts.createProject( 'tsconfig.json' );

gulp.task( 'serve', function() {
    gulp.src( './' )
        .pipe( webserver( {
            fallback: 'index.html',
            host: 'localhost',
            livereload: true,
            open: true,
            port: 1010
        } ) );
} );

gulp.task( 'watch', function() {
    gulp.watch( './src/main.scss', [ 'css' ] );
    gulp.watch( './src/main.ts', [ 'js' ] );
} );

gulp.task( 'css', function() {
    return gulp.src( './src/main.scss' )
        .pipe( sass()
            .on( 'error', sass.logError ) )
        .pipe( autoPrefixer( {
            browsers: [ 'last 2 versions' ],
            cascade: false
        } ) )
        .pipe( gulp.dest( './stylesheets' ) );
} );

gulp.task( 'js', function() {
    return tsProject.src()
        .pipe( tsProject() )
        .pipe( gulp.dest( './scripts' ) );
} );

gulp.task( 'build', [ 'js', 'css' ] );