// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Menu, MenuItem } from './Nav.css'
import { Button } from 'components'

const Nav = props => (
  <Menu>
    <MenuItem>
      <Button large to="/" active={props.location === '/'}>
        Home
      </Button>
    </MenuItem>
    <MenuItem>
      <Button
        large
        to="/portfolio"
        active={props.location.includes('/portfolio')}
      >
        Portfolio
      </Button>
    </MenuItem>
    <MenuItem>
      <Button large to="/about" active={props.location === '/about/'}>
        About
      </Button>
    </MenuItem>
    <MenuItem>
      <Button large to="/about" active={props.location === '/about/'}>
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
