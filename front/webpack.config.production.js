const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const config = merge(baseConfig, {
  output: {
    path: __dirname + '../../../../public/assets',
    filename: 'bundle.js'
  }
})

module.exports = config
