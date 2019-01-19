import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Chip.css'
import { FlavorContext } from 'utils'
const Chip = ({ children, ...props }) => {
  return (
    <FlavorContext.Consumer>
      {flavor => {
        return (
          <Wrapper {...props} flavor={flavor}>
            {children}
          </Wrapper>
        )
      }}
    </FlavorContext.Consumer>
  )
}

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.bool,
}

export { Chip }
