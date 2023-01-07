const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // app: './src/app.js',
    // menuTab: './src/menuTab.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};