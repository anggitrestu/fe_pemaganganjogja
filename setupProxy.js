const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/auth', {
      target: `${process.env.NEXT_PUBLIC_API_HACKLAB}`,
      secure: false,
      changeOrigin: true,
    })
  );
};
