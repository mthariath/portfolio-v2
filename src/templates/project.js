import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {
  Layout,
  SEO,
  ProjectCard,
  ArticleGrid,
  Title,
  ArticleImage,
} from 'components'

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

        {body.map((slice, i) => {
          switch (slice.slice_type) {
            case 'text':
            default:
              return (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: slice.primary.text.html }}
                />
              )
            case 'title':
              return (
                <Title size={6} as="h3" sans key={i}>
                  {slice.primary.heading.text}
                </Title>
              )
            case 'image':
              return (
                <ArticleImage
                  key={i}
                  image={slice.primary.image.localFile.childImageSharp.fluid}
                  caption={slice.primary.caption}
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
        link {
          url
        }
        github {
          url
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
