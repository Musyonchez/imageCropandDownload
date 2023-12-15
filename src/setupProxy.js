const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/images',
    createProxyMiddleware({
      target: 'https://2022.creativesocialintranet.com',
      changeOrigin: true,
    })
  );
};
