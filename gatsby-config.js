require("dotenv").config({

  path: `.env.${process.env.NODE_ENV}`,
  
  })

module.exports = {
  siteMetadata: {
    title: `MikkelCodes`,
    description: `This is a blog about web development, react, gatsby and more. It contains tutorials, blog posts and resources on the topic, created by Mikkel Klokkerud.`,
    author: `Mikkel Klokkerud`,
    url: "https://mikkelcodes.com",
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
        name: "src",
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
          endpoint: `https://mikkelcodes.us19.list-manage.com/subscribe/post?u=a6380a8628ee8997c2d6805c7&amp;id=f0c9f84372`,
      },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Source Sans Pro`,
          variants: [`300`, `400`, `700`, `900`],
        },
        {
          family: `Oswald`,
          variants: [`300`, `400`, `700`, `200`],
        },
        {
          family: `Playfair Display`,
          variants: [`400`, `700`, `900`],
        },
      ],
    },
  },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mikkelcodes`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
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
        icon: `src/images/favicon-32x32.png`,
        legacy: false,
      },
    },
  ],
  
}

