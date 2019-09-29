import React from 'react'
import { rhythm } from "../utils/typography"
import { Link, graphql, StaticQuery } from "gatsby"
import Button from "../components/button"

function SectionCase() {

    return (
        <StaticQuery
            query={postQuery}
            render={data => {
                const posts = data.allMarkdownRemark.edges
                return (
                    <div style={{ margin: "20px 0 40px" }}>
                        {posts.map(({ node }) => {
                            const title = node.frontmatter.title || node.fields.slug
                            return (
                            <div key={node.fields.slug}>
                                <h3
                                style={{
                                    marginBottom: rhythm(1 / 4),
                                }}
                                >
                                <Link
                                    style={{ boxShadow: `none` }}
                                    to={`blog${node.fields.slug}`}
                                >
                                    {title}
                                </Link>
                                </h3>
                                <small>{node.frontmatter.date}</small>
                                <p
                                dangerouslySetInnerHTML={{
                                    __html: node.frontmatter.description || node.excerpt,
                                }}
                                />
                                <Button marginTop="35px">See case study</Button>
                            </div>
                            )
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
          }
        }
      }
    }
  }
`

export default SectionCase 