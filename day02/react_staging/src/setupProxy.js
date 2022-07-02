const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', { //  遇见 /api1 前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000',  // 请求转发给谁
      changeOrigin: true,  // 控制服务器收到的响应头中的Host字段的值
      ws: true, 
      pathRewrite: { '^/api1': '' }
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/api2': '' }
    })
  )
}