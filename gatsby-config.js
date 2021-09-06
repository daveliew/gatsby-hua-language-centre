module.exports = {
    siteMetadata: {
        siteUrl: "https://hua.com.sg/",
        title: "Hua Language Centre",
    },
    plugins: [
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-transformer-sharp`,
            options: {
                // The option defaults to true
                checkSupportedExtensions: false,
            },
        },
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "https://hua.com.sg/graphql",
                schema: {
                    //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
                    typePrefix: `Wp`,
                },
                develop: {
                    //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
                    hardCacheMediaFiles: true,
                },
            },
        },
    ],
};
