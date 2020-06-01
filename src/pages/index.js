import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

import '../styles/index.scss'
import homePageStyles from '../styles/homepage.module.scss'

import heroImage from '../../static/js-wallpapaer.jpg'

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }  
    }
  `)

  return (
    <div>
      <Layout>
        <div className={homePageStyles.container}>
          <img src={heroImage} alt="hero-image" />
          <div className={homePageStyles.text}>
            <h1>Salut</h1>
            <p>
              Numele meu este {data.site.siteMetadata.author} si am decis sa creez un tutorial care sa ne ajute sa incepem sa lucram cu <b>Garsby JS</b>.
            </p>
            <Link className={homePageStyles.homePageLink} to="/tutorial"> Mergi la tutorial </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default HomePage
