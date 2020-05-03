require("dotenv").config({

  path: `.env.${process.env.NODE_ENV}`,
  
  })

module.exports = {
  siteMetadata: {
    title: `MikkelCodes`,
    description: `This is a blog about web development, react, gatsby and more. It contains tutorials, blog posts and resources on the topic, created by Mikkel Klokkerud.`,
    author: `Mikkel Klokkerud`,
  },
  plugins: [
    {
        resolve: "gatsby-source-contentful",
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: "src"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163172180-1",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: `<form action="https://mikkelcodes.us19.list-manage.com/subscribe/post?u=a6380a8628ee8997c2d6805c7&amp;id=f0c9f84372" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>`,
      },
  },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `baskerville\:400`,
          `muli\:300,700`,
          `baloo tamudu 2\:400,700`
        ]
      }
    },

    "gatsby-transformer-remark",
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

