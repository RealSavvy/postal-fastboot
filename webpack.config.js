const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        //exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-latest']
          }
        }
    }
    ]
  },
  output: {
    filename: 'postal.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      root: 'postal',
      amd: 'postal',
      commonjs: 'postal'
    },

    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  plugins: [
    //new MinifyPlugin({})
  ]
};
