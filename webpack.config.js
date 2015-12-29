var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var PATHS = {
 app: path.join(__dirname, 'app'),
 build: path.join(__dirname, 'build')
};

module.exports = {
  context: __dirname,
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },

  // loaders
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }
  ],

  // dev server options
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env so this is easy to customize.
    host: process.env.HOST,
    port: process.env.PORT,

  },

  // plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'React Redux TODO App'
    })
  ]
};
