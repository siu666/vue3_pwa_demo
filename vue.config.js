const { defineConfig } = require('@vue/cli-service');
const IS_PROD = process.env.NODE_ENV === 'production'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  publicPath: './',
  assetsDir: 'static',

  transpileDependencies: true,
  
  chainWebpack(config) {
    config.module.rule()
    config.when(IS_PROD,
      config => {
        config.optimization.splitChunks({
          chunks: 'all',
          cacheGroups: {
            libs: {
              // name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'async' // only package third parties that are initially dependent
            },
            // elementUI: {
            //     name: 'chunk-elementUI', // split elementUI into a single package
            //     priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            //     test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
            // },
            common: {
              // name: 'common', // chunk 名称
              priority: 0, // 优先级
              minSize: 0,  // 公共模块的大小限制
              minChunks: 2  // 公共模块最少复用过几次
            }
          }
        });
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
      }
      
      ),
      config.when(IS_PROD,
         config=>{
          config.optimization.minimizer('terser').tap((args) => {
            args[0].parallel = 4
            args[0].terserOptions = {
                compress: {
                    warnings: true,
                    drop_console: true,
                    drop_debugger: true
                }
            }
            return args
          })
         }
        )
  },
  configureWebpack:{
    module:{
      rules:[
        {
          test:/\.(png|jpg|gif|svg|jpeg)$/,
          // loader:'file-loader',
          // type:'asset',
          //webpack5 处理
          parser: {
            dataUrlCondition: {
              maxSize: 3*1024
            }
          },
          generator: {
            
            filename: 'static/image/[name].[hash:5][ext]'
          },
          // options:{
          //   limit:9*1024,
          //   name:'[name].[hash:10].[ext]',
          //   outputPath:'static/',
          //   publicPath:'./'
          // }
          // use:['file-loader'],
        }
      ]
    },
  }
  // configureWebpack: {
  //   optimization: {
  //     minimizer: [
  //       new TerserPlugin({
  //         parallel:true,
  //         terserOptions: {
  //           ecma: undefined,
  //           warnings: false,
  //           parse: {},
  //           compress: {
  //             drop_console: true,
  //             drop_debugger: false,
  //             pure_funcs: ['console.log'] // 移除console
  //           }
  //         },
  //       }),
  //     ]
  //   }
  // },
})
