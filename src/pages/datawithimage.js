import * as React from 'react';
import { graphql} from "gatsby"
import parse from "react-html-parser"


const datawithimage= ({ data }) => {
    console.log(data)
    return data.allWpPage.edges.map(cont=>{
        return(
            <div>
                <h1>Discription</h1>
                <p>{parse(cont.node.content)}</p>
  
                <img src={data.allWpMediaItem.edges[0].node.sourceUrl}/>
                </div>
        )
    })


}
export const imagesData= ({ data }) => {
return data.allWpMediaItem.edges.map(conts=>{
    return(
        <div>
            <h1>image</h1>
            <img src={conts.node.sourceUrl}/>
            </div>
    )
})
}
export const query= graphql `query{
    allWpPage(filter: {title: {eq: "Blog"}}) {
      edges {
        node {
          id
          content
        }
      }
    }
    allWpMediaItem(filter: {id: {eq: "cG9zdDozMzM2"}}) {
      edges {
        node {
          id
          sourceUrl
        }
      }
    }
  }
`
export default datawithimage
