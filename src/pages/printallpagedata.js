import * as React from "react"
import { graphql } from "gatsby"
//import parse from "react-html-parser"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { render } from "react-dom"
import Img from "gatsby-image"

const allpagedata=({data})=>{
    console.log(data)
      return (
        <div>
            {parse(data.allWpPage.edges[0].node.content)}
        </div>
    )
}

export const query = graphql` query{
    allWpPage(filter: {title: {eq: "Home"}}) {
      edges {
        node {
          id
          content
        }
      }
    }
  }
`
export default allpagedata