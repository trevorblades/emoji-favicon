# Emoji Favicon Webpack Plugin

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

If you're using [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin), the HTML tags necessary to include your favicon will automatically be appended to the `<head>` of your document.

```html
<head>
  <!-- other tags -->
  <link rel="shortcut icon" href="favicon.ico">
</head>
```

## Options

By default, we use [Twemoji](https://github.com/twitter/twemoji) for consistent results across all operating systems. If you would prefer to use your system's emoji font instead, specify the `useSystem` option in the constructor.

```js
new EmojiFaviconPlugin({
  emoji: '🍣',
  useSystem: true,
  sizes: [16] // default is [16, 32, 48]
})
```

You can also specify a shortcode instead of an emoji! Check out [this link](https://gist.github.com/rxaviers/7360908) for a complete listing of emojis and their shortcodes.

```js
new EmojiFaviconPlugin(':bathtub:') // 🛁
```

## A note about using system emoji

MacOS has a pretty awesome and extensive library of emoji built into its [Apple Color Emoji](https://en.wikipedia.org/wiki/Apple_Color_Emoji) typeface, but other operating systems aren't so lucky. If you normally develop on a Mac, you will see different results when you build your app on a Linux or Windows machine.

In order to get consistent results between development and production, you should make sure that you use the same operating system for building in each environment. The configuration required to make this happen varies between CI tools, but if you use [TravisCI](https://travis-ci.com), you can add the following to your `.travis.yml` file depending on what OS you're trying to target:

### MacOS

```yaml
os: osx
```

### Ubuntu

```yaml
# the following is required to use Ubuntu system emoji
# https://github.com/travis-ci/travis-ci/issues/8836#issuecomment-348227535
sudo: required
addons:
  chrome: stable
```

## Usage with Gatsby

To generate an emoji favicon with [Gatsby](https://gatsbyjs.org), use the [Gatsby plugin](../gatsby-plugin-emoji-favicon).

## License

[MIT](../../LICENSE)
