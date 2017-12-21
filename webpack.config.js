const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  /*
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  */
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
  }
};
