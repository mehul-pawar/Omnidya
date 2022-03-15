import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"

      
 

const Imagepage =({data})=>{

    return data.allFile.nodes.childImageSharp.map(node=>{

        return(

            <div>
                       <Img
        fluid={node.GatsbyImageSharpFluid}
        alt="A corgi smiling happily"
      /> 
            </div>
        )

    })



}

export const query = graphql`
query MyQuery {
    allFile {
      nodes {
        childImageSharp {
         
          fluid {
          
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  
`
export default Imagepage