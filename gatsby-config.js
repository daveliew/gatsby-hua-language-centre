module.exports = {
    siteMetadata: {
        siteUrl: "https://hua.com.sg/",
        title: "Hua Language Centre",
    },
    plugins: [
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "https://hua.com.sg/graphql",
            },
        },
    ],
};
