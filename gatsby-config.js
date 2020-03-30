const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  let {
    mdxOtherwiseConfigured = false,
    mdx: legacyConfigureMdxFlag = true,
  } = themeOptions // keep mdx flag so we don't introduce a breaking change

  return {
    plugins: [
      !mdxOtherwiseConfigured &&
        legacyConfigureMdxFlag && {
          resolve: `gatsby-plugin-mdx`,
          options: {
            extensions: [`.mdx`, `.md`],
            gatsbyRemarkPlugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  // should this be configurable by the end-user?
                  maxWidth: 1380,
                  linkImagesToOriginal: false,
                },
              },
              { resolve: `gatsby-remark-copy-linked-files` },
              { resolve: `gatsby-remark-smartypants` },
            ],
            remarkPlugins: [require(`remark-slug`)],
          },
        },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/posts`,
          name: options.contentPath || `content/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ].filter(Boolean),
  }
}
