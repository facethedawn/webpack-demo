const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 204800
        }
      }
    },{
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader'
      }
    },{
      test: /\.scss$/,
      use: ['style-loader',
        {
          loader: 'css-loader',
          options: {
            // 配置了该参数才能在scss文件中调用scss文件
            importLoaders: 2
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    },{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    },{ 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env',{
          useBuiltIns: 'usage',
          targets: {
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1",
          },
          'corejs': 3
        }]]
      }
    }]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }), 
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}