import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, ArticleGrid, PortfolioPageListing, SEO } from '../components'

const PortfolioGrid = styled.div`
  grid-area: intro;
  flex-direction: column;
  justify-content: space-evenly;
  grid-gap: 2rem;
  align-items: center;
  display: grid;
  padding: 0.25rem;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  grid-auto-rows: 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
  }
  @media (min-width: 1024px) and (max-width: 1800px) {
    padding: 1rem;
  }
  @media (min-width: 1800px) {
    grid-gap: 4rem;
    padding: 2rem;
  }
`

const PortfolioPage = ({ data, location }) => {
  const items = data.allPrismicProject.edges.map(project => (
    <PortfolioPageListing key={project.node.uid} project={project.node} />
  ))
  return (
    <Layout location={location.pathname}>
      <SEO title="My Work" keywords={[`gatsby`, `application`, `react`]} />
      <ArticleGrid title="My Work">
        <PortfolioGrid>{items}</PortfolioGrid>
      </ArticleGrid>
    </Layout>
  )
}

PortfolioPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default PortfolioPage

export const query = graphql`
  query PortfolioPageQuery {
    allPrismicProject(sort: { fields: [data___order], order: ASC }) {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
            snippet
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
          }
        }
      }
    }
  }
`
