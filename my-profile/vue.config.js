const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // ===== 重要经验教训 =====
  // 设置publicPath为相对路径，解决打包后路径问题
  // 
  // 问题背景：
  // 1. Vue CLI 默认打包时使用绝对路径（以 / 开头），如 /js/xxx.js、/css/xxx.css
  // 2. 当使用 Live Server 等简单静态服务器访问时，无法解析绝对路径
  // 3. 导致 404 错误和 MIME 类型错误：
  //    - "Failed to load resource: the server responded with a status of 404"
  //    - "Refused to apply style because its MIME type ('text/html') is not a supported stylesheet MIME type"
  //
  // 解决方案：
  // 设置 publicPath: './' 将绝对路径改为相对路径
  // 这样无论项目部署在哪个目录下都能正确访问资源文件
  // ========================
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 输出目录配置
  outputDir: 'dist',
  // 静态资源目录
  assetsDir: '',
  // 开发服务器配置
  devServer: {
    port: 8080,
    open: true
  }
}) 