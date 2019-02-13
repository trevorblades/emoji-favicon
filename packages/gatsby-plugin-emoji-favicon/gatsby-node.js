const EmojiFaviconPlugin = require('emoji-favicon-webpack-plugin');

exports.onCreateWebpackConfig = ({actions}, options) => {
  actions.setWebpackConfig({
    plugins: [new EmojiFaviconPlugin(options)]
  });
};
