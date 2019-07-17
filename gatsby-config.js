module.exports = {
  siteMetadata: {
    title: `Scrapes`,
    description: `A collection of ideas, lessons-learned, and best practices scraped from everywhere possible`,
    author: `jdraths`,
  },
  pathPrefix: "/scrapes",
  plugins: [
    `gatsby-plugin-react-helmet`,
    // [TODO](Roane Draths) why do we have this twice:
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // to fetch data from the filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // for markdown reading:
    `gatsby-transformer-remark`,
    // css in js library:
    `gatsby-plugin-emotion`,
    // typography.js - https://github.com/KyleAMathews/typography.js
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // for images
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
