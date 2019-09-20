const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: path.resolve(__dirname, 'designsystem/components/index.js'),
    mode: 'production',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      library: '',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    externals: ['react', 'react-dom','@emotion/core'],
    plugins: [
      new BundleAnalyzerPlugin({
          openAnalyzer: false,
          analyzerMode: "static"
      })
    ],
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