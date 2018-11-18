const render = require('favicon-emoji/lib/render');
const toIco = require('to-ico');
const emojiUnicode = require('emoji-unicode');
const fs = require('pn/fs');
const svg2png = require('svg2png');

async function generatePngs(options) {
  const emoji = typeof options === 'string' ? options : options.emoji;
  const sizes = options.sizes || [72, 48, 32, 16];
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

        // console.log(pngs);

        // render(this.emoji, [16, 32, 48])

        //   .then(ico => {

        //   });
      }
    );
  }
}

module.exports = EmojiFaviconPlugin;
