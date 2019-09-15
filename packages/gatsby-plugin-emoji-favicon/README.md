# gatsby-plugin-emoji-favicon

A Gatsby plugin that generates an [emoji favicon](../../README.md)

## Installation

```bash
$ npm install --save gatsby-plugin-emoji-favicon
```

## Usage

Add `gatsby-plugin-emoji-favicon` to your Gatsby `gatsby-config.js` file, and pass your desired emoji as an option.

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-emoji-favicon',
      options: {
        emoji: '✈️'
      }
    }
  ]
};
```

This plugin accepts all options accepted by [`emoji-favicon-webpack-plugin`](../emoji-favicon-webpack-plugin/README.md#options).

## License

[MIT](../../LICENSE)
