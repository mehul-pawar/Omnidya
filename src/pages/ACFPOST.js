import * as React from "react"
import { graphql } from "gatsby"
//import parse from "react-html-parser"
// import parse from "html-react-parser"
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import { render } from "react-dom"
import Img from "gatsby-image"

const acfPost=({data})=>{
 return(
     <div>
         {data.allWpPost.edges[0].node.acfDemo.justATextField}
         <h1> {data.allWpPost.edges[0].node.acfDemo.textarea}</h1>
         <img src={data.allWpPost.edges[0].node.acfDemo.kaliimg.sourceUrl}/>
     </div>
 )
}

export const query=graphql `query{
    allWpPost(filter: {title: {eq: "Freetech"}}) {
      edges {
        node {
          excerpt
          acfDemo {
            fieldGroupName
            justATextField
            textarea
            kaliimg{
                    sourceUrl
              }
          }
        }
      }
    }
  }
  
`
export default acfPost
