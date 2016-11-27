'use strict'

var fs = require('fs')
var path = require('path')
var eslint = require('eslint')

var repoRootPath = path.resolve(__dirname, '..')
var ignoredDirs = ['node_modules', 'test', '.git']

function isDir(dirname) {
  return file => file === path.resolve(dirname)
}

function exclude(dirs) {
  return file => !dirs
    .map(dir => isDir(dir))
    .some(isExcludedDir => isExcludedDir(file))
}

function flatten(arr) {
  return Array.isArray(arr) ? [].concat.apply([], arr.map(flatten)) : arr
}

function filterJSFiles(files) {
  return files.filter(file => path.extname(file) === '.js')
}

function readDir(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => err ? reject(err) : resolve(files))
  })
}

function iterateOverFoundFiles(files, callback) {
  return Promise.all(
    files.map(filepath => new Promise((resolve, reject) => {
      fs.stat(filepath, (err, stat) => {
        if (err) reject(err)

        if (stat.isDirectory()) return resolve(callback(filepath))

        return resolve(filepath)
      })
    }))
  )
}

function findRepoFiles(dir) {
  return readDir(dir)
    .then(files => files
      .map(file => path.join(dir, file))
      .filter(exclude(ignoredDirs))
    )
    .then(files => iterateOverFoundFiles(files, findRepoFiles))
}

function printError(error) {
  var errorInfo = error.name === 'ESLintError' ? error.message : error.stack

  console.log(errorInfo)
  process.exit(1)
}

function testEslintrcFile(file) {
  var options = {
    useEslintrc: false,
    configFile: file
  }

  var cli = new eslint.CLIEngine(options)
  var report = cli.executeOnText('// Sample file\n', file)
  var formatter = cli.getFormatter()
  var result = formatter(report.results)

  if (result.length !== 0) {
    var error = new Error(result)
    error.name = 'ESLintError'
    throw error
  }
}

findRepoFiles(repoRootPath)
  .then(flatten)
  .then(filterJSFiles)
  .then(files => files.forEach(testEslintrcFile))
  .catch()

process.on('unhandledRejection', printError)
