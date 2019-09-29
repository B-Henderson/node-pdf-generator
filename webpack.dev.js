const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const compiler = require('vue-template-compiler')
module.exports = {
  watch: true,
  entry: './src/index.js',
  mode: 'development',
  output: { path: path.join(__dirname, '/public') },
  module: {
    rules: [
      {
        test: /\.vue$/,

        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
              sassOptions: {
                fiber: require('fibers')
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } }
}
