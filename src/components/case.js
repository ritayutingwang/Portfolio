import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import styled from "styled-components"

function Case({post}) {
    
    const title = post.frontmatter.title || post.fields.slug
    return (
        <div key={post.fields.slug}>
            <img style={{ margin: 0, width: "100%" }} src={post.frontmatter.coverImage} alt="Gatsby Scene" />
            <small>{post.frontmatter.date}</small>
            <h3
                style={{
                    marginTop: rhythm(1/4),
                    marginBottom: rhythm(1 / 4),
                }}
            >
            <Title
                to={`blog${post.fields.slug}`}
            >
                {title}
            </Title>
            </h3>
            
            <p
            dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
            }}
            />
            <Button marginTop="35px">See case study</Button>
        </div>
    )
}

Case.defaultProps = {
  post: null
}

Case.propTypes = {
  post: PropTypes.object,
}
const Title = styled(Link)`
    box-shadow: none; 
    line-height: 1.6;
    color: #262626; 

    &:hover {
        
        color: #4455BB;
      }
    
`;
export default Case