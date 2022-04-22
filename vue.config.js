const { defineConfig } = require('@vue/cli-service');
const IS_PROD = process.env.NODE_ENV === 'production'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  publicPath:'./',
  assetsDir:'static',
  
  transpileDependencies: true,
  // chainWebpack(config) {
    
  //   if (IS_PROD) {
  //     config.optimization.splitChunks({
  //       cacheGroups: {
  //         common: {
  //           name: 'chunk-common', // 打包后的文件名
  //           chunks: 'initial', // 
  //           minChunks: 2,
  //           maxInitialRequests: 5,
  //           minSize: 0,
  //           priority: 1,
  //           reuseExistingChunk: true
  //         },
  //         vendors: {
  //           name: 'chunk-vendors',
  //           test: /[\\/]node_modules[\\/]/,
  //           chunks: 'initial',
  //           priority: 2,
  //           reuseExistingChunk: true,
  //           enforce: true
  //         },
  //         // echarts: {
  //         //   name: 'echarts',
  //         //   test: /[\\/]node_modules[\\/]_?echarts(.*)/,
  //         //   chunks: 'initial',
  //         //   priority: 3,
  //         //   reuseExistingChunk: true,
  //         //   enforce: true
  //         // },
  //         antDesignVue: {
  //           name: 'chunk-ant-design-vue',
  //           test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
  //           chunks: 'initial',
  //           priority: 3,
  //           reuseExistingChunk: true,
  //           enforce: true
  //         }
  //       }
  //     })
  //   }
  // },
  configureWebpack:config=>{
      return {
        
        plugins:[
          IS_PROD?new BundleAnalyzerPlugin():''
        ],
      //   optimization: {
      //     splitChunks: {
      //         chunks: 'async',
      //         minSize: 30000,
      //         maxSize: 0,
      //         minChunks: 1,
      //         maxAsyncRequests: 6,
      //         maxInitialRequests: 4,
      //         automaticNameDelimiter: '~',
      //         cacheGroups: {
      //             vendors: {
      //                 name: `chunk-vendors`,
      //                 test: /[\\/]node_modules[\\/]/,
      //                 priority: -10,
      //                 chunks: 'initial'
      //             },
      //             common: {
      //                 name: `chunk-common`,
      //                 minChunks: 2,
      //                 priority: -20,
      //                 chunks: 'initial',
      //                 reuseExistingChunk: true
      //             }
      //         }
      //     }
      // }
      }
  }
})
