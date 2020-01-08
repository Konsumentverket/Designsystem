const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: path.resolve(__dirname, 'designsystem/components/index.ts'),
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: '',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  externals: ['react', 'react-dom', '@emotion/core'],
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: "static"
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('awesome-typescript-loader'),
            options: {
              configFileName: './tsconfig.json',
              transpileOnly: true
            }
          }
        ],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react', '@babel/typescript']
            }
          },
        ],
      }
    ]
  }
};