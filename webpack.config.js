const path = require('path')
// const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  entry: ['./src/frontend/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.js',
    publicPath:'/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@components': path.resolve(__dirname, 'src/frontend/components'),
      '@pages': path.resolve(__dirname, 'src/frontend/pages'),
      '@icons': path.resolve(__dirname, 'src/frontend/assets/img/ion-icons'),
      '@files': path.resolve(__dirname, 'src/frontend/assets/files'),
      '@img': path.resolve(__dirname, 'src/frontend/assets/img'),
      '@css': path.resolve(__dirname, 'src/frontend/assets/css'),

    }
  },
  mode:"development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options:{name:'assets/[hash].[ext]'}
          },
        ],
      },
    ]
  },
  devServer:{
    historyApiFallback:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebPackPlugin({
    //   template: './public/index.html',
    //   filename: './index.html'
    // }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/IBearSmile.css'
    })
  ]
}
