import React from "react"
import unu from '../../static/videos/1.starter-gatsby-cli-install.mp4'

import Layout from "../components/layout";

const TutorialPage = () => {
  return(
    <div>
      <Layout>
        <h1>Gatsby JS - Create a blog tutorial</h1>
        <video controls>
          <source src={unu} type="video/mp4" />
        </video>
      </Layout>
    </div>
  )
}

export default TutorialPage