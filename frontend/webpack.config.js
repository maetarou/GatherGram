const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist/'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    inline: true,
    port: 8080,
    host: '0.0.0.0',
  }
}
