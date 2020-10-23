import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ data }) => {
  const post = data.mdx
  const site = data.site

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} – ${site.siteMetadata.title}`}</title>
      </Helmet>

      <div className="container">
        <Img className="w-full" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        <h1>{post.frontmatter.title}</h1>
        <p className="">
          {post.frontmatter.date}
        </p>

        <article className="m-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        <div className="flex justify-center mx-auto my-8">
          <Link to="/">back to home</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
