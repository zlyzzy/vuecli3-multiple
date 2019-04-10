const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false, //不在production环境使用SourceMap
    /**
     * 是否使用包含运行时编译器的 Vue 构建版本。
     * 设置为 true 后你就可以在 Vue 组件中使用 template 选项了，
     * 但是这会让你的应用额外增加 10kb 左右。
     */
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