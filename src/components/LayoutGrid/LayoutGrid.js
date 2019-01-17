import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './LayoutGrid.css'
// import { FlavorContext, flavors } from 'src/utils'

const LayoutGrid = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

LayoutGrid.propTypes = {
  children: PropTypes.node.isRequired,
}

export { LayoutGrid }
