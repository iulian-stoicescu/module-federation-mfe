// 4202 is the port that this app is started on
const localServer = 4202;
// 5202 is the port that the stub server of this app is started on
const localStubServer = 5202;

module.exports = {
  '/test-mfe/*': {
    target: `http://localhost:${localServer}`,
    secure: false,
    logLevel: 'debug',
    pathRewrite: {
      '^/test-mfe': ''
    }
  },
  '/my-service/*': {
    target: `http://localhost:${localStubServer}`,
    secure: false,
    logLevel: 'debug',
    pathRewrite: {
      '^/my-service': ''
    }
  }
};
