const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap: false, //不在production环境使用SourceMap
    lintOnSave: process.env.NODE_ENV !== 'production',
    //允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: (config) => {
    //命名
    config.resolve.alias
      .set('SRC', resolve('src'))
      .set('ASSET', resolve('src/assets'))
      .set('VIEW', resolve('src/components/page'))
      .set('COMPONENT', resolve('src/components'))
      .set('MIXINS', resolve('src/mixins'))
      .set('UTIL', resolve('src/utils'))
      .set('SERVICE', resolve('src/services'));
  },
    pages: {
        console: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/console/console.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/console.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'console.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'console page',

            // 包含的模块，可选项
            chunks: ['chunk-vendors','console']
        },
        // 只有entry属性时，直接用字符串表示模块入口
        client: 'src/modules/client/client.js'
    },
    devServer: {//跨域
        port: 8081,// 端口号
        open: true, //配置自动启动浏览器
        proxy: {// 配置跨域处理 可以设置多个
          '/api': {
            target: 'http://192.168.1.191:8050/',
            ws: true,
            changeOrigin: true
          },
        }
      }
}