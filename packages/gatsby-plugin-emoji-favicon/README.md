# gatsby-plugin-emoji-favicon

A Gatsby plugin that generates an [emoji favicon](https://github.com/trevorblades/emoji-favicon-webpack-plugin)

## Installation

```bash
$ npm install --save gatsby-plugin-emoji-favicon
```

## Usage

Add `gatsby-plugin-emoji-favicon` to your Gatsby `gatsby-config.js` file.

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

You can configure the plugin further by passing any of the options accepted by [`emoji-favicon-webpack-plugin`](https://github.com/trevorblades/emoji-favicon-webpack-plugin#options).
