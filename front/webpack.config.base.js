const path = require('path')

const config = {
  entry: {
    javascript: __dirname + '/src/app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
