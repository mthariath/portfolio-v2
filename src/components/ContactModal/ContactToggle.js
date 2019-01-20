import React from 'react'
import PropTypes from 'prop-types'
import { ContactModal } from './ContactModal'
import { Toggle } from 'utils'

const ContactToggle = ({ children }) => {
  return (
    <Toggle>
      {({ visible, toggle }) => {
        return (
          <>
            {children(toggle)}
            {<ContactModal visible={visible} toggle={toggle} />}
          </>
        )
      }}
    </Toggle>
  )
}

ContactToggle.propTypes = {
  children: PropTypes.func.isRequired,
}

export { ContactToggle as ContactModal }
