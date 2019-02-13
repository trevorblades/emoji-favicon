/* eslint-env jest */
const MemoryFileSystem = require('memory-fs');
const webpack = require('webpack');
const {JSDOM} = require('jsdom');
const config = require('./webpack.config.js');

const fs = new MemoryFileSystem();
const compiler = webpack(config);
compiler.outputFileSystem = fs;

test('generates a favicon and injects it into the HTML', done => {
  jest.setTimeout(10000);
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
  });
});
