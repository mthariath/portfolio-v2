import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import { Layout, SEO } from '../components/'

const SecondPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

SecondPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default SecondPage
