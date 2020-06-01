import React from "react"
import {graphql, useStaticQuery} from "gatsby";

import '../styles/index.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          site
        }
      }  
    }
  `)

  return (
    <footer>
      <section>Copyright © - 2020 {data.site.siteMetadata.site}</section>
      <section>Developed by {data.site.siteMetadata.author}</section>
    </footer>
  )
}

export default Footer