var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'], // use mocha framework
    files: ['app/tests/**/*.test.jsx'], // files to hold test,all files/folders in test folder that end with .test.jsx
    preprocessors: { // things we want to do with test files
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] // run these on test files
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000' // after 5sec, if test not finish, cancel it and say its a fail test
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
