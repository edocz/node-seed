const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: [
    path.resolve(ROOT_PATH,'app/src/index')
  ],
  module: {
		rules: [
			{
	      test: /\.jsx?$/,
	      exclude: /node_modules/,
	      use: [{
					loader: 'react-hot-loader',
					loader: 'babel-loader'
				}]
	    },
	    {
	      test: /\.scss$/,
				use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
	    }
		]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'React BoilerPlate'
    })
  ]
};
