var path = require('path');
//var webpack = require('webpack');


//use webpack
// module.exports = {
//   entry: './minus.js',
//   output: { path: __dirname, filename: 'bundle.js' },
//   module: {
//     loaders: [
//       {
//         test: /\js|jsx$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   },
// };

//use webpack-dev-server
module.exports = {
  entry: './app/minus.js',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\js|jsx$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
