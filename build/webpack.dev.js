const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

 const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig)