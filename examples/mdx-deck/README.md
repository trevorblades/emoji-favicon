# Using an emoji favicon with Gatsby and MDX Deck

This example will demonstrate how to add an emoji favicon to your next awesome slide deck. It will use [Gatsby](https://gatsbyjs.org) and [MDX Deck](https://mdx-deck.jxnblk.com/).

In an empty project directory, install `gatsby-plugin-emoji-favicon` and all of the other dependencies for this example.

```shell
$ npm init -y # initialize empty package.json
$ npm install gatsby gatsby-theme-mdx-deck # install mdx deck gatsby theme
$ npm install react react-dom # install gatsby peer dependencies
$ npm install gatsby-plugin-emoji-favicon # install emoji favicon plugin
```

Configure your Gatsby config to generate an emoji of your choice, and add `gatsby-theme-mdx-deck`. The theme will be used to quickly create an interactive slide deck later.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-mdx-deck',
    {
      resolve: 'gatsby-plugin-emoji-favicon',
      options: {
        emoji: '🛶'
      }
    }
  ]
};
```

Now, create a slide deck in the `decks/` directory. This is the place that `gatsby-theme-mdx-deck` looks by default, but you can [configure that with options](https://github.com/jxnblk/mdx-deck/tree/master/packages/gatsby-theme#configuration-options).

```md
<!-- decks/index.mdx -->
# Hello world

---

## Phases

1. Collect underpants
2. ?
3. Profit

---

# The end
```

[Click here](https://emoji-favicon-mdx-deck.surge.sh) for a hosted version of this example.
