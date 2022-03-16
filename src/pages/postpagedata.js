import * as React from "react"
import { graphql } from "gatsby"
//import parse from "react-html-parser"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { render } from "react-dom"
import Img from "gatsby-image"

const postsData=({data})=>{
    
      return (
        <div>
            {parse(data.allWpPost.edges[0].node.content)}
        </div>
    )
}
export const query =graphql `query{
    allWpPost(filter: {title: {eq: "Freetech"}}) {
      edges {
        node {
          id
          content
        }
      }
    }
  }
  `
export default postsData