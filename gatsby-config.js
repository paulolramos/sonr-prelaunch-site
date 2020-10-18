const path = require("path");

module.exports = {
  siteMetadata: {
    title: `SONR`,
    description: "SONR Prelaunch Site",
    author: `Paulo Ramos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SONR`,
        short_name: `SONR`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.join(__dirname, "/src/images/icons"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
