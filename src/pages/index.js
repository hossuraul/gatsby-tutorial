import React from "react"
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

import '../styles/index.scss'

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
        <h1>Salut</h1>
        <h2>
          Numele meu este {data.site.siteMetadata.author} si am decis sa creez un tutorial care sa ne ajute sa incepem sa lucram cu Garsby JS.
        </h2>
        <p>Sper sa fiti interesati si sa va placa.</p>
        <p>Pentru mai multe detalii ma gasiti pe slack.</p>
      </Layout>
    </div>
  )
}

export default HomePage
