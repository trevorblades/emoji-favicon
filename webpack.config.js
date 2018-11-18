const EmojiFaviconPlugin = require('./plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index',
  plugins: [new EmojiFaviconPlugin('💊'), new HtmlPlugin()]
};
