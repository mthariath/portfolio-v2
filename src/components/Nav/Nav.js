// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Menu, MenuItem } from './Nav.css'
import { Button } from 'components'

const Nav = props => (
  <Menu>
    <MenuItem>
      <Button large={1} to="/" active={props.location === '/' ? 1 : undefined}>
        Home
      </Button>
    </MenuItem>
    <MenuItem>
      <Button
        large={1}
        to="/portfolio"
        active={props.location.includes('/portfolio') ? 1 : undefined}
      >
        Portfolio
      </Button>
    </MenuItem>
    <MenuItem>
      <Button
        large={1}
        to="/about"
        active={props.location === '/about/' ? 1 : undefined}
      >
        About
      </Button>
    </MenuItem>
    <MenuItem>
      <Button
        large={1}
        to="/about"
        active={props.location === '/about/' ? 1 : undefined}
      >
        Contact
      </Button>
    </MenuItem>
  </Menu>
)

Nav.propTypes = {
  location: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export { Nav }
