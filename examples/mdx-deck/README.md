# Using an emoji favicon with MDX Deck

![Good news](https://i.imgur.com/REpK0gd.jpg)

If you use [MDX Deck](https://github.com/jxnblk/mdx-deck) to create slide shows, you can use an emoji favicon _really_ easily. MDX Deck uses webpack, so you can configure it using a `webpack.config.js` file at the root of your project.

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
