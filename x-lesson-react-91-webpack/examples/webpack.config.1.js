const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  // __dirname is location of this file
  entry: {
    app: './main.js',
    // name of above file is ./src/main.js
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    // [name] is name of entry, --> 'app'
    // filename is ./dist/app.bundle.js
  },
};
