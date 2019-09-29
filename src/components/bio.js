/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div style={{
            backgroundColor: ``,
          }}>
            <h1>👋 Hi, I am Rita, working as Senior Product Designer at Carousell.</h1>
            <p>I am passionate in solving problems with technology to achieve a simple, equal, and sustainable world. I code and I love to make things happen.</p>
            <Container>
              <p>
                You can find me on {` `}
                <a href={`https://medium.com/@${social.medium}`} target="_blank">
                  Medium
                </a> {` `}
                <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank">
                  LinkedIn
                </a> {` `}
                <a href={`https://twitter.com/${social.twitter}`} target="_blank">
                  Twitter
                </a> {` `}
              </p>
            </Container>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
