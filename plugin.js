const render = require('favicon-emoji/lib/render');
const toIco = require('to-ico');

class EmojiFaviconPlugin {
  constructor(emoji) {
    this.emoji = emoji;
  }

  apply(compiler) {
    compiler.hooks.make.tapAsync(
      'EmojiFaviconPlugin',
      (compilation, callback) =>
        render(this.emoji, [16, 32, 48])
          .then(toIco)
          .then(ico => {
            compilation.assets['favicon.ico'] = {
              source: () => ico,
              size: () => ico.length
            };

            if (compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing) {
              compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
                'EmojiFaviconPlugin',
                (htmlPluginData, callback) => {
                  const publicPath = compilation.outputOptions.publicPath || '';
                  htmlPluginData.html = htmlPluginData.html.replace(
                    /(<\/head>)/i,
                    `<link rel="shortcut icon" href="${publicPath}favicon.ico">$&`
                  );

                  callback(null, htmlPluginData);
                }
              );
            }

            callback();
          })
    );
  }
}

module.exports = EmojiFaviconPlugin;
