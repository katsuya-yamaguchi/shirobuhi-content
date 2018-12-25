const path = require('path');

module.exports = {
  entry: {
    countdown: path.resolve(__dirname, './src/countdown.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  }
}
