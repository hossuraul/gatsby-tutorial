import React from "react"
import unu from '../../static/videos/1.starter-gatsby-cli-install.mp4'
import doi from '../../static/videos/2.starter-gatsby-building-pages.mp4'
import trei from '../../static/videos/3.starter-gatsby-link-between-pages.mp4'
import patru from '../../static/videos/4.starter-gatsby-layout-wrapper.mp4'
import cinci from '../../static/videos/5.starter-gatsby-applied-styles.mp4'
import sase from '../../static/videos/6.starter-gatsby-bonus-styling.mp4'
import sapte from '../../static/videos/7.starter-gatsby-GraphQl.mp4'
import opt from '../../static/videos/8.starter-gatsby-filesystem.mp4'
import noua from '../../static/videos/9.starter-gatsby-markdown-parse.mp4'
import zece from '../../static/videos/10.starter-gatsby-create-slug-for-posts.mp4'
import unsprezece from '../../static/videos/11.starter-gatsby-link-between-posts.mp4'
import doisprezece from '../../static/videos/12.starter-gatsby-rendering-md-data-in-template.mp4'
import treisprezece from '../../static/videos/13.starter-gatsby-add-videos-for-tutorial.mp4'
import paisprezece from '../../static/videos/14.starter-gatsby-deploy-netlify.mp4'


import Layout from "../components/layout";

const TutorialPage = () => {
  return(
    <div>
      <Layout>
        <h1>Gatsby JS - Create a blog tutorial</h1>

        <h4>1.Starter gatsby - cli install</h4>
        <video controls>
          <source src={unu} type="video/mp4" />
        </video>

        <h4>2.Starter gatsby - building pages</h4>
        <video controls>
          <source src={doi} type="video/mp4" />
        </video>

        <h4>3.Starter gatsby - link between pages</h4>
        <video controls>
          <source src={trei} type="video/mp4" />
        </video>

        <h4>4.Starter gatsby - gatsby layout wrapper</h4>
        <video controls>
          <source src={patru} type="video/mp4" />
        </video>

        <h4>5.Starter gatsby - gatsby applied styles</h4>
        <video controls>
          <source src={cinci} type="video/mp4" />
        </video>

        <h4>6.Starter gatsby - gatsby bonus styling</h4>
        <video controls>
          <source src={sase} type="video/mp4" />
        </video>

        <h4>7.Starter gatsby - Into GraphQl</h4>
        <video controls>
          <source src={sapte} type="video/mp4" />
        </video>

        <h4>8.Starter gatsby - gatsby filesystem</h4>
        <video controls>
          <source src={opt} type="video/mp4" />
        </video>

        <h4>9.Starter gatsby - markdown parse</h4>
        <video controls>
          <source src={noua} type="video/mp4" />
        </video>

        <h4>10.Starter gatsby - create slug for posts</h4>
        <video controls>
          <source src={zece} type="video/mp4" />
        </video>

        <h4>11.Starter gatsby - link between posts</h4>
        <video controls>
          <source src={unsprezece} type="video/mp4" />
        </video>

        <h4>12.Starter gatsby - rendering markdown data in template</h4>
        <video controls>
          <source src={doisprezece} type="video/mp4" />
        </video>

        <h4>13.Starter gatsby - add videos for the tutorial</h4>
        <video controls>
          <source src={treisprezece} type="video/mp4" />
        </video>

        <h4>14.Starter gatsby - deploy with netlify</h4>
        <video controls>
          <source src={paisprezece} type="video/mp4" />
        </video>
      </Layout>
    </div>
  )
}

export default TutorialPage