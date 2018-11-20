# Using an emoji favicon with MDX Deck

[MDX Deck](https://github.com/jxnblk/mdx-deck) is a great tool for creating slideshows using Markdown and React that are viewed in your web browser. There's only one problem: your slides look amazing, but your browser tab is plain and boring.

![good news](https://i.imgur.com/REpK0gd.jpg)

Since MDX Deck uses webpack, you can add an emoji favicon _really_ easily. It just takes a few lines in a `webpack.config.js` file at the root of your project.

```shell
$ npm install --save-dev emoji-favicon-webpack-plugin
```

```js
// webpack.config.js
const EmojiFaviconPlugin = require('emoji-favicon-webpack-plugin');

module.exports = {
  plugins: [new EmojiFaviconPlugin('🚀')]
};
```

```js
// deck.mdx
import {Head} from 'mdx-deck';

<Head>
  <link rel="shortcut icon" href="favicon.ico" />
</Head>

// the rest of your deck here
```

## Run it locally

If you want to try this out on your machine, clone this repo, install dependencies, and run the `mdx-deck` development server.

```shell
$ cd examples/mdx-deck
$ npm install
$ npm start
```

[Click here](https://emoji-favicon-mdx-deck.surge.sh) for a hosted version of this example.
