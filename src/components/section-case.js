import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import Case from "../components/case"

function SectionCase() {

    return (
        <StaticQuery
            query={postQuery}
            render={data => {
                const posts = data.allMarkdownRemark.edges
                
                return (
                    <div style={{ margin: "20px 0 40px" }}>
                        {posts.map(({ node }) => {
                            console.log(node)
                            return (<Case post={node} key={1}/>)
                        })}
                    </div>
                )
            }}
        />
    )
}


const postQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            coverImage
          }
        }
      }
    }
  }
`

export default SectionCase 