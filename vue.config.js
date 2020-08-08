module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('cache-loader')
      .loader('cache-loader')
      .end()
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('webpack-atomizer-loader')
      .loader('webpack-atomizer-loader')
      .tap(() => {
        return {
          configPath: require('path').resolve('./acss.config.js'),
        }
      })
      .end()
  },
}
