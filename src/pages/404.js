import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from '../components/'
import SEO from '../components/seo'

const NotFoundPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)
NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default NotFoundPage
