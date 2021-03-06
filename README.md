# Blog core theme

A Gatsby theme for creating a blog child theme. It includes all of the data structures you need to get up and running building a blog and includes no additional theming or style opinions.

## Installation

1. Install the theme

```shell
npm install @dseoane/gatsby-theme-blog-core
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@dseoane/gatsby-theme-blog-core`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
};
```

3. Add blog posts to your site by creating `md` or `mdx` files inside `/content/posts`.

   > Note that if you've changed the default `contentPath` in the configuration, you'll want to add your markdown files in the directory specified by that path.

4. Run your site using `gatsby develop` and navigate to your blog posts. If you used the above configuration, your URL will be `http://localhost:8000/blog`

## Usage

### Theme options

| Key                      | Default value    | Description                                                                     |
| ------------------------ | ---------------- | ------------------------------------------------------------------------------- |
| `basePath`               | `/`              | Root url for all blog posts                                                     |
| `contentPath`            | `content/posts`  | Location of blog posts                                                          |
| `assetPath`              | `content/assets` | Location of assets                                                              |
| `disablePostsPage`       | `false`          | Set this flag `true` if you don't want to generate the posts page               |
| `mdxOtherwiseConfigured` | `false`          | Set this flag `true` if `gatsby-plugin-mdx` is already configured for your site |

### Blog Post Fields

The following are the defined blog post fields based on the node interface in the schema

| Field       | Type     |
| ----------- | -------- |
| id          | String   |
| slug        | String   |
| noindex     | Boolean  |
| featured    | Boolean  |
| image       | File     |
| title       | String   |
| description | String   |
| date        | Date     |
| excerpt     | String   |
| body        | String   |
| category    | String   |
| tags        | [String] |
