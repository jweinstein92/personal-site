module.exports = {
  siteMetadata: {
    title: 'Josh Weinstein | Software Engineer',
    siteUrl: `https://www.joshweinstein.co`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
};
