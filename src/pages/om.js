// import * as React from "react"
// import { graphql } from "gatsby"
// // import parse from "html-react-parser"
// import { GatsbyImage,getImage} from 'gatsby-plugin-image'
// import parse from 'react-html-parser'
// import {posttitle,postanddate} from '../components/layout.module.css'





// const postBlog1 = ({ data }) => {

   
//     return data.allWpPost.nodes.map(node => {
//         const image = node.featuredImage.node.sourceUrl        
//       return (
        
//         <div>
//           <h5 className={posttitle}>{node.title}</h5>
  
//           <p className={postanddate}>by: {node.author.node.name} <br></br>{node.date}</p>
//           <p>{parse(node.excerpt)}</p>
           
            
//              {/* <GatsbyImage
//                image={image} alt="df"
//             />  */}
//           { <img src={image} /> }

//         </div>
//       )
//     })
//   }
  

// export const postwithimage=graphql` query{
//   allWpPost {
//     nodes {
//       excerpt
//       title
//       date(formatString: "MMMM DD, YYYY")
//       author {
//         node {
//           name
//         }
//       }
//       featuredImage {
//         node {
//           altText
//           sourceUrl
//         }
//       }
//     }
//   }
// }

  
//   `

//   export default postBlog1