import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, SEO, ArticleGrid } from 'components'

const Project = ({ location, data }) => {
  const {
    prismicProject: {
      data: {
        title: { text: title },
        client: { text: client },
        main_image,
      },
    },
  } = data
  return (
    <Layout location={location.pathname}>
      <SEO title={`Portfolio / ${title}`} keywords={[`application`, `react`]} />
      <ArticleGrid title={title} subtitle={client}>
        <Img
          fluid={{
            ...main_image.localFile.childImageSharp.fluid,
            aspectRatio: 1.618 / 1,
          }}
        />
      </ArticleGrid>
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
}

export default Project

export const query = graphql`
  query ProjectQuery($slug: String!) {
    prismicProject(uid: { eq: $slug }) {
      uid
      data {
        title {
          text
        }
        client {
          text
        }
        main_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`
