const webpack = require('webpack')

module.exports = {
  entry: ['./node_modules/setimmediate/setImmediate.js', './node_modules/cheerio/index.js'],
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: "commonjs"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}