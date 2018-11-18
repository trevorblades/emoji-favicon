# Emoji Favicon Webpack Plugin

[![Build Status](https://travis-ci.com/trevorblades/emoji-favicon-webpack-plugin.svg?branch=master)](https://travis-ci.com/trevorblades/emoji-favicon-webpack-plugin)

Generates a favicon based on an emoji for your webapp

## Installation

```shell
$ npm install --save-dev emoji-favicon-webpack-plugin
```

## Usage

Add the plugin to your webpack config and pass your emoji of choice to it as an argument. A favicon will be generated and outputted with your bundle.

```js
const EmojiFaviconPlugin = require('emoji-favicon-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new EmojiFaviconPlugin('🦑'),
    new HtmlPlugin() // not required, but really handy
  ]
};
```

If you're using [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin), the HTML tags necessary to include your favicon will automatically be added to the `<head>` of your document.

```html
  ...
  <link rel="shortcut icon" href="favicon.ico">
</head>
```

### Options

By default, we use [Twemoji](https://github.com/twitter/twemoji) for consistent results across all operating systems. If you would prefer to use your system's emoji font instead, specify the `useSystem` option in the constructor. You can also choose which icon `sizes` to include!

```js
new EmojiFaviconPlugin({
  emoji: '🍣',
  useSystem: true,
  sizes: [16] // default is [16, 32, 48]
})
```

## A note about using system emoji

MacOS has a pretty awesome and extensive library of emojis built into its [Apple Color Emoji](https://en.wikipedia.org/wiki/Apple_Color_Emoji) typeface, but other operating systems aren't so lucky. If you normally develop on a Mac, you will see different results when you build your app on a Linux or Windows machine.

In order to get consistent results between development and production, you should make sure that you use the same operating system for building in each environment. The configuration required to make this happen varies between CI tools, but if you use [TravisCI](https://travis-ci.com), you can add the following to your `.travis.yml` file depending on what OS you're trying to target:

### MacOS

```yaml
os: osx
```

### Ubuntu

```yaml
# the following is required for favicon-emoji to run on Ubuntu with `useSystem`
# https://github.com/travis-ci/travis-ci/issues/8836#issuecomment-348227535
sudo: required
addons:
  chrome: stable
```

## License

[MIT](./LICENSE)