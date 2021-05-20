const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  stats: {
    children: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  },
  module: {
    rules: [
      { test: /\.js$/, use: {
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env']}
      },
      },
      { test: /\.ts$/, loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] } },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
    new VueLoaderPlugin(),
  ]
};
