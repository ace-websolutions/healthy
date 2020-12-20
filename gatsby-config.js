module.exports = {
  siteMetadata: {
    title: 'Happy Healthy',
    description: `Sample website for a business involving a healthy lifestyle. Example layout and flow for portfolio`,
    author: `Ace Web Solutions`,
    keywords: [
      'webdevelopment',
      'healthy',
      'sample',
      'web',
      'portfolio',
      'acewebsolutions',
      'website',
      'freelance',
      'ace',
    ],
  },

  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /images/,
      },
    },
  ],
};
