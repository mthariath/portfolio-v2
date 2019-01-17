import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'

const Fade = ({ children, direction }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} leave={{ opacity: 0 }}>
      {props => <div style={props}>{children}</div>}
    </Spring>
  )
}

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
}
export { Fade }
