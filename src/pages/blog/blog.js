import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
     {/* <ul>
       {
         data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
         ))
       }
     </ul> */}
     {
       data.allMdx.nodes.map(node=>(
         <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
           </article>
       ))
     }
    </Layout>
  )
}

// export const query = graphql`
// query{
//   allFile {
//     nodes {
//       name
//     }
//   }
// }
// `

export const query =graphql `
query{
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      id
      body
    }
  }
}

`

export default BlogPage
