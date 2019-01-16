import React from 'react'
import PropTypes from 'prop-types'

const Fade = ({ children }) => {
  return <div> {children} </div>
}

Fade.propTypes = {
  children: PropTypes.node.isRequired,
}
export { Fade }
