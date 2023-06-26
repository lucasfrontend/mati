// api/index.js

const { createProxyMiddleware } = require('http-proxy-middleware');

// Configuración del proxy
const apiProxy = createProxyMiddleware('/api', {
  target: 'https://coterranea.nocrm.io',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api/v2',
  },
  secure: false,
});

module.exports = function (req, res, next) {
  // Procesar solicitudes API a través del proxy
  apiProxy(req, res, next);
};
