const EmojiFaviconPlugin = require('./lib');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [new EmojiFaviconPlugin('🐠'), new HtmlPlugin()]
};
