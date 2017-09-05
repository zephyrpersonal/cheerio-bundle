const { resolve } = require('path')

module.exports = {
  entry: './node_modules/cheerio/index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: "commonjs"
  }
}