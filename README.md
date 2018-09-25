# Emoji Favicon Webpack Plugin

Leverages [favicon-emoji](https://github.com/albinekb/favicon-emoji) to generate an emoji favicon for your webapp

## Installation

```shell
$ npm install --save-dev emoji-favicon-webpack-plugin
```

## Usage

Add the plugin to your webpack config and pass your emoji of choice to it as an argument. A favicon will be generated and outputted with your bundle. If you're using [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin), the HTML tags necessary to include your favicon will automatically be added to the `<head>` of your document.

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
