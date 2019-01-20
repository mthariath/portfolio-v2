import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Layout, SEO, ProjectCard, ArticleGrid, Title } from 'components'

const Project = ({ location, data }) => {
  const {
    prismicProject: {
      data: {
        title: { text: title },
        client: { text: client },
        body,
      },
    },
  } = data
  return (
    <Layout location={location.pathname} title={title} subtitle={client}>
      <SEO title={`Portfolio / ${title}`} keywords={[`application`, `react`]} />
      <ArticleGrid>
        <ProjectCard project={data.prismicProject} />

        {body.map(slice => {
          switch (slice.slice_type) {
            case 'text':
            default:
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: slice.primary.text.html }}
                />
              )
            case 'title':
              return (
                <Title size={6} as="h3" sans>
                  {slice.primary.heading.text}
                </Title>
              )
            case 'image':
              return (
                <Img
                  fluid={{
                    ...slice.primary.image.localFile.childImageSharp.fluid,
                    aspectRatio: 1.618 / 1,
                  }}
                />
              )
          }
        })}
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
        technology {
          technology_item {
            text
          }
        }
        scope {
          scope_item {
            text
          }
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
        body {
          __typename
          ... on PrismicProjectBodyText {
            slice_type
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicProjectBodyTitle {
            slice_type
            primary {
              heading {
                html
                text
              }
            }
          }
          ... on PrismicProjectBodyImage {
            slice_type
            primary {
              caption
              image {
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
      }
    }
  }
`
