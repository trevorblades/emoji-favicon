const render = require('favicon-emoji/lib/render');
const toIco = require('to-ico');

const filename = 'favicon.ico';
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
            compilation.assets[filename] = {
              source: () => ico,
              size: () => ico.length
            };

            compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
              'EmojiFaviconPlugin',
              (htmlPluginData, callback) => {
                const publicPath = compilation.outputOptions.publicPath || '';
                htmlPluginData.html = htmlPluginData.html.replace(
                  /(<\/head>)/i,
                  `<link rel="shortcut icon" href="${publicPath + filename}">$&`
                );

                callback(null, htmlPluginData);
              }
            );

            callback();
          })
    );
  }
}

module.exports = EmojiFaviconPlugin;
