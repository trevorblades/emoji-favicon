const EmojiFaviconPlugin = require('./lib');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [new HtmlPlugin(), new EmojiFaviconPlugin()]
};
