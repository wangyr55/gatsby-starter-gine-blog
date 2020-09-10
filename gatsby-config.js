module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/bb8c4a179cbc4ca5b3ad9acdb518b922?v=57d2ae9bc4e54f759fa05b4886d04de8"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/a7647d9f7e0f4a4b8b0a2bde64e7656c?v=393c38abd7a040339ce4b058d0cd1bd2"
            }
        }
    ],
}
