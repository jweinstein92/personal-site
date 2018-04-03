module.exports = {
  siteMetadata: {
    title: 'Josh Weinstein | Software Engineer',
    siteUrl: `https://www.joshweinstein.co`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
