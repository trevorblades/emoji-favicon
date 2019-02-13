const EmojiFaviconPlugin = require('./packages/emoji-favicon-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index',
  plugins: [new EmojiFaviconPlugin('💊'), new HtmlPlugin()]
};
