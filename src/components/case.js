import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

function Case({post}) {
    
    const title = post.frontmatter.title || post.fields.slug
    return (
        <div key={post.fields.slug}>
            <img style={{ margin: 0, width: "100%" }} src={post.frontmatter.coverImage} alt="Gatsby Scene" />
            <h3
            style={{
                marginBottom: rhythm(1 / 4),
            }}
            >
            <Link
                style={{ boxShadow: `none` }}
                to={`blog${post.fields.slug}`}
            >
                {title}
            </Link>
            </h3>
            <small>{post.frontmatter.date}</small>
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
export default Case