/* eslint-env jest */
const MemoryFS = require('memory-fs');
const webpack = require('webpack');
const {JSDOM} = require('jsdom');
const EmojiFaviconPlugin = require('.');
const HtmlPlugin = require('html-webpack-plugin');

const fs = new MemoryFS();

const compiler = webpack({
  entry: __dirname + '/entry.js',
  plugins: [new EmojiFaviconPlugin('💊'), new HtmlPlugin()]
});

compiler.outputFileSystem = fs;

test('generates a favicon and injects it into the HTML', done => {
  function handler(err, stats) {
    if (err || stats.hasErrors()) {
      done.fail();
      return;
    }

    const {assets, outputPath} = stats.toJson();
    const files = assets.map(asset => asset.name);
    expect(files).toContain('favicon.ico');

    const html = fs.readFileSync(`${outputPath}/index.html`);
    const dom = new JSDOM(html);
    const link = dom.window.document.querySelector('link[rel="shortcut icon"]');
    expect(link.href).toEqual('favicon.ico');

    done();
  }

  compiler.run(handler);
});
