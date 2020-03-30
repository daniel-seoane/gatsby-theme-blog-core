import { graphql } from "gatsby"
import PostsPage from "../components/posts"

export default PostsPage

export const query = graphql`
  query PostsQuery {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          slug
          title
          featured
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          excerpt
          date(formatString: "MMMM DD, YYYY")
          category
          tags
        }
      }
    }
  }
`
