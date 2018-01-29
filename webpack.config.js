const config = {
 entry: './src/index.js',
 output: {
   filename: 'dist/bundle.js'
 },
  module:{
    rules:[
      {
        test: /\.js$/,
        loader:'babel-loader'
      }
    ]
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  }
}
module.exports = config;
