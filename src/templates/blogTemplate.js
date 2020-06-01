import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout";

export const query = graphql`
  query(
    $slug: String!
  ) {
    markdownRemark(
      fields:{
        slug: {
          eq:$slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const BlogTemplate = (props) => {
  return(
    <Layout>
      <p><b>{props.data.markdownRemark.frontmatter.title}</b>----{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    </Layout>
  )
}

export default BlogTemplate