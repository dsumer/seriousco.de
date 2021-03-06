module.exports = {
  siteMetadata: {
    title: `seriousco.de`,
    description: `It's all about software - serious code.`,
    author: `Dominik Sumer`,
    siteUrl: `https://seriousco.de`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `seriousco.de`,
        short_name: `seriousco.de`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#007bb3`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`]
          },
          {
            family: `Roboto`,
            variants: [`400`]
          },
          {
            family: `Roboto Mono`,
            variants: [`400`]
          },
        ],
      },
    },
    `gatsby-plugin-less`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
  ],
}
