// 4202 is the port that this app is started on
module.exports = {
  '/test-mfe/*': {
    target: 'http://localhost:4202',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {
      '^/test-mfe': ''
    }
  }
};
