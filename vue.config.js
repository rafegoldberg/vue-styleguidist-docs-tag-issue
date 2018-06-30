module.exports = {

  baseUrl: '/',

  configureWebpack: {
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0"
    },
    output:{
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    resolve: {
      alias: {}
    }
  },

  css: {
    sourceMap: true,
    extract: false
  },
  
  lintOnSave: false
};