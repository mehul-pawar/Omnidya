import * as React from "react"
import {Link, graphql } from "gatsby"
// import parse from "html-react-parser"
import { GatsbyImage,getImage} from 'gatsby-plugin-image'
import parse from 'react-html-parser'
import {posttitle,postanddate} from '../components/layout.module.css'
import { node } from "prop-types"





const postBlog2 = ({ data }) => {

   
    return data.allWpMediaItem.edges.map(a=> {
          
      return (
        
        <div>
        
          <img src={a.node.sourceUrl} alt="d"/> 

        </div>
      )
    })
  }
  

export const allimagess =graphql ` query{
    allWpMediaItem {
        edges {
          node {
            sourceUrl
          }
        }
      }
    }
 `

   export default postBlog2





















  