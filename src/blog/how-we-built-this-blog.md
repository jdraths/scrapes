---
title: The initial sources for how we built this blog
date: "2019-07-16"
---

# Deploying:
```
npm run deploy
```

We used the method detailed within [Jared Nielsen's blog](https://jarednielsen.com/deploy-gatsbyjs-github-pages-user/). The only change we made was that we deploy to the gh-pages branch rather than the deploy branch. All we had to do was change the `deploy: script:` within package.json so that the deploy branch is `gh-pages` rather than `deploy`:
```
"scripts": {
    ...
    "deploy": "gatsby build --prefix-paths && gh-pages -d public -b gh-pages"
  },
  <!-- gh-pages is an npm library that publishes files to whichever branch you want -->
```
Within our repo we also had to change the GitHub Pages settings source to `gh-pages branch`, [here](https://github.com/jdraths/scrapes/settings)

# Initial coding
We used the `gatsby-blog` started and then added the packages from the [Gatsby Tutorials](https://www.gatsbyjs.org/tutorial/part-four/#recap-of-the-first-half-of-the-tutorial) so that we could add some better styling and add markdown to our blog. The packages we added were:
1. gatsby-source-filesystem
2. gatsby-transformer-remark
3. gatsby-plugin-emotion
4. gatsby-plugin-typography
5. gatsby-transformer-sharp