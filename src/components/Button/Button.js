import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.css'
import { FlavorContext } from 'utils'
const Button = ({ to, href, ...props }) => {
  return (
    <FlavorContext.Consumer>
      {flavor =>
        to ? (
          <StyledButton flavor={flavor} as={Link} to={to} {...props} />
        ) : href ? (
          <StyledButton as="a" href={href} flavor={flavor} {...props} />
        ) : (
          <StyledButton flavor={flavor} {...props} />
        )
      }
    </FlavorContext.Consumer>
  )
}

Button.propTypes = {
  /* the 'to' prop accepts a slug pointing to some page on the website, e.g. '/' or '/blog' */
  to: PropTypes.string,

  /* the 'href' prop accepts a URL pointing to some other website e.g. 'https://www.google.com' */
  href: PropTypes.string,

  /* the active prop styles the button as "active" */
  active: PropTypes.bool,
}

export { Button }
