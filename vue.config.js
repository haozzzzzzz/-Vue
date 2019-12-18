module.exports = {
    publicPath: './',
    devServer: {
      proxy: {
        '/api': {
          'target': 'http://0.0.0.89:7300',
          'ws': true
        }
        // '/api':'http://app.baidu.com',
        // target:'http://app.baidu.com',
        // changeOrigin:true,
        // secure:false,
        // pathRewrite:{
        //     '^/api':'/',
        //     target:'http://app.baidu.com',
        // 前面的^api 代表 target 的链接跟请求的地址拼接
        // }
      }
    }
}
