const gulp = require('gulp')
const log = require('fancy-log')
const colors = require('ansi-colors')
const projectPath = require('../lib/projectPath')
const merge = require('merge-stream')

gulp.task('init', function() {
  const srcStream = gulp.src(['src/**/*', 'src/**/.gitkeep'])
    .pipe(gulp.dest(projectPath(PATH_CONFIG.src)))

  log(colors.green('Generating default Sobiratel project files'))
  log(colors.yellow(`
To start the dev server:
`), colors.magenta(`
yarn run sobiratel
`))

  return merge(defaultStream, configStream, srcStream)
})
