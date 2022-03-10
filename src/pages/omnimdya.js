import * as React from "react"
import { graphql } from "gatsby"
// import parse from "html-react-parser"
import parse from 'react-html-parser'
 const postBlog = ({ data }) => {
  return data.allWpPost.nodes.map(node => {
    return (
      <main>

        {node.title}
        {parse(node.excerpt)}
      </main>
    )
  })
}

export const pagequery = graphql`
  query {
    allWpPost {
      nodes {
        excerpt
        title
      }
    }
  }
`
export default postBlog