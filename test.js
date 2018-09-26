/* eslint-env jest */
const EmojiFaviconPlugin = require('./plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MemoryFileSystem = require('memory-fs');
const webpack = require('webpack');
const {JSDOM} = require('jsdom');

const fs = new MemoryFileSystem();
const compiler = webpack({
  entry: './index',
  plugins: [new EmojiFaviconPlugin('🦑'), new HtmlPlugin()]
});
compiler.outputFileSystem = fs;

test('generates a favicon and injects it into the HTML', done =>
  compiler.run((err, stats) => {
    if (err) {
      done.fail();
      return;
    }

    const {outputPath, assets} = stats.toJson();
    const files = assets.map(asset => asset.name);
    expect(files).toContain('favicon.ico');

    const html = fs.readFileSync(`${outputPath}/index.html`);
    const dom = new JSDOM(html);
    const link = dom.window.document.querySelector('link[rel="shortcut icon"]');
    expect(link.href).toEqual('favicon.ico');

    done();
  }));
