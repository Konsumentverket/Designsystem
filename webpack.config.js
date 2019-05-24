const path = require('path');
// const glob = require("glob");

// var entrys = {};
// glob.sync('./designsystem/components/*/*.js', {
//     ignore:[
//       "./designsystem/components/*.js",
//       "./designsystem/components/**/*-stories.js",
//       "./designsystem/components/**/*css.js"
//     ]
//   }
// )
// .forEach(item => {
//   var file = item.split(/(\\|\/)/g).pop().replace(".js","");
//   entrys[file] = item;
// });

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
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            plugins: [
              "inline-react-svg"
            ]
          }
        }
      ]
    }
  };