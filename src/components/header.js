import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";

import navigationElements from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }  
    }
  `)

  return (
    <header className={navigationElements.header}>
      <h2>{data.site.siteMetadata.title}</h2>
      <nav>
        <ul>
          <li className={navigationElements.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={navigationElements.link}>
            <Link to="/tutorial">Tutorials</Link>
          </li>
          <li className={navigationElements.link}>
            <Link to="/about">About</Link>
          </li>
          <li className={navigationElements.link}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header