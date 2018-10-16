module.exports = {
  siteMetadata: {
    title: 'Dreams of Scarlett',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dreams of Scarlett',
        short_name: 'Dreams of Scarlett',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#000',
        //display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Chivo`,
            variants: [`900`]
          },
        ],
      },
    },
  ],
}
