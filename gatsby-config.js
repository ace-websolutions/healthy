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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /images/,
      },
    },
  ],
};
