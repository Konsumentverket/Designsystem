const path = require('path');
const glob = require("glob");

var entrys = {};
glob.sync('./designsystem/components/*/*.js', {
    ignore:[
      "./designsystem/components/*.js",
      "./designsystem/components/**/*-stories.js"
    ]
  }
)
.forEach(item => {
  var file = item.split(/(\\|\/)/g).pop().replace(".js","");
  entrys[file] = item;
});

module.exports = {
    entry: entrys,
    mode: 'production',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
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