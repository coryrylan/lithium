const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './index.js'),
  resolve: {
    extensions: ['.js'],
    alias: {
      'lithium-ui': path.resolve(__dirname, '../../../dist/lithium'),
    },
  },
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, '../../../dist/test-bundles'),
  },
};
