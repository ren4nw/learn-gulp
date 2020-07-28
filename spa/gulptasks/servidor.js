const gulp = require('gulp')
const webserver = require('gulp-webserver')

function monitorarArquivos(cb) {
    
}

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}

module.exports = {
    monitorarArquivos,
    servidor
}