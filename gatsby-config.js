module.exports = {
    siteMetadata: {
        siteUrl: "https://hua.com.sg/",
        title: "Hua Language Centre",
    },
    plugins: [
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
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
                type: {
                    Post: {
                        limit:
                            process.env.NODE_ENV === `development` ? 50 : 5000,
                    },
                },
            },
        },
    ],
};
