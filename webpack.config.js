const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, 'designsystem/components/index.js'),
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'designsystem/dist'),
      filename: 'index.js',
      library: '',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    externals: ['react', 'react-dom'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      ]
    }
  };