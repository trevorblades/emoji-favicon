const render = require('favicon-emoji/lib/render');
const toIco = require('to-ico');
const emojiUnicode = require('emoji-unicode');
const emojiNameMap = require('emoji-name-map');
const fs = require('pn/fs');
const svg2png = require('svg2png');

const isShortcode = /^:?[a-z0-9_]+:?$/;
async function generatePngs(options) {
  let emoji = typeof options === 'string' ? options : options.emoji;
  if (isShortcode.test(emoji)) {
    emoji = emojiNameMap.get(emoji);
  }

  const sizes = options.sizes || [16, 32, 48];
  if (options.useSystem) {
    return await render(emoji, sizes);
  }

  const unicode = emojiUnicode(emoji);
  const path = require.resolve(`twemoji/2/svg/${unicode}.svg`);
  const svg = await fs.readFile(path);
  return await Promise.all(
    sizes.map(size =>
      svg2png(svg, {
        width: size,
        height: size
      })
    )
  );
}

class EmojiFaviconPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.make.tapAsync(
      'EmojiFaviconPlugin',
      async (compilation, callback) => {
        const pngs = await generatePngs(this.options);
        const ico = await toIco(pngs);
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
      }
    );
  }
}

module.exports = EmojiFaviconPlugin;
