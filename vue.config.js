const { defineConfig } = require('@vue/cli-service');
const IS_PROD = process.env.NODE_ENV === 'production'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  publicPath:'./',
  assetsDir:'static',
  
  transpileDependencies: true,
  // configureWebpack:config=>{
  //     return {
        
  //       plugins:[
  //         IS_PROD?new BundleAnalyzerPlugin():''
  //       ],
  //       optimization: {
  //         splitChunks: {
  //             chunks: 'async',
  //             minSize: 30000,
  //             minChunks: 1,
  //             maxAsyncRequests: 6,
  //             maxInitialRequests: 4,
  //             automaticNameDelimiter: '~',
  //             cacheGroups: {
  //                 vendors: {
  //                     test: /[\\/]node_modules[\\/]/,
  //                     priority: -10,
  //                 },
  //                 // common: {
  //                 //     name: `chunk-common`,
  //                 //     minChunks: 2,
  //                 //     priority: -20,
  //                 //     chunks: 'initial',
  //                 //     reuseExistingChunk: true
  //                 // }
  //             }
  //         }
  //     }
  //     }
  // }
})
