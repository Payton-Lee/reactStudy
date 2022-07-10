const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', { //  遇见 /api1 前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000',  // 请求转发给谁
      changeOrigin: true,  // 控制服务器收到的请求头中的Host字段的值，true则后台显示host为后台地址，不写或者是false则显示host为前台地址
      ws: true, 
      pathRewrite: { '^/api1': '' } // 重写请求路径，（必须加，不加会报404）
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/api2': '' }
    })
  )
}