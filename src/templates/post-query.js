import { graphql } from "gatsby"
import PostPage from "../components/post"

export default PostPage

export const query = graphql`
  query PostPageQuery($id: String!) {
    blogPost(id: { eq: $id }) {
      slug
      noindex
      image {
        childImageSharp {
          fluid(maxWidth: 1380) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title
      date(formatString: "MMMM DD, YYYY")
      excerpt
      body
      category
      tags
    }
  }
`
