import * as React from "react"
import { graphql } from "gatsby"
// import parse from "html-react-parser"
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import parse from 'react-html-parser'
import {posttitle,postanddate} from '../components/layout.module.css'

//  const postimage = ({data})=>{
//    console.log(data)
//   const image = getImage(data.allFile.edges.node)
//   return image.map(node=>{
//     return(
//       <main>
//                 <GatsbyImage
//       image={node.url}
      
//     />
//       </main>
//     )
//   })
// }
 const postBlog = ({ data }) => {
  
  return data.allWpPost.nodes.map(node => {
    return (
      
      <div>
        <h5 className={posttitle}>{node.title}</h5>

        <p className={postanddate}>by: {node.author.node.name} <br></br>{node.date}</p>
        <p>{parse(node.excerpt)}</p>
         
        
      </div>
    )
  })
}

export const pagequery = graphql`
query myquery {
  allWpPost {
    nodes {
      excerpt
      title
      date(formatString: "MMMM DD, YYYY")
      author {
        node {
          name
        }
      }
    }
  }
}`

// export const pagequery= graphql `query{
//   allFile {
//     edges {
//       node {
//         id
//         url
//       }
//     }
//   }
//   allWpPost {
//     nodes {
//       excerpt
//       title
//     }
//   }
// }`
export default postBlog

//export default postimage