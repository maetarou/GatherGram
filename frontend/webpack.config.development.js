const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const config = merge(baseConfig, {
  output: {
    path: __dirname + './dist',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: __dirname +  '/dist',
    port: 8080,
    host: '0.0.0.0',
    inline: true,
    historyApiFallback: true
  }
})

module.exports = config
