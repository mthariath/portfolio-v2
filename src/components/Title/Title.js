import React from 'react'
import PropTypes from 'prop-types'
import { FlavorContext } from 'utils'

import { StyledTitle } from './Title.css'
const Title = props => {
  return (
    <FlavorContext.Consumer>
      {flavor => <StyledTitle flavor={flavor} {...props} />}
    </FlavorContext.Consumer>
  )
}

Title.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

export { Title }
