const { defineConfig } = require('@vue/cli-service');
const IS_PROD = process.env.NODE_ENV === 'production'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  publicPath: './',
  assetsDir: 'static',

  transpileDependencies: true,
  chainWebpack(config) {
    config.when(IS_PROD,
      config => {
        config.optimization.splitChunks({
          chunks: 'all',
          cacheGroups: {
            vendors: false
            // lodash: {
            //   name:'lodash',
            //   test: /[\\/]node_modules[\\/]_?lodash(.*)/,
            //   priority: -9,
            // },
            // default: false
          }
        });
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
      .end()
    })
   }
})
