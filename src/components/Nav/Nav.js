// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Trail, config } from 'react-spring'
import { Menu, MenuItem, NavWrapper } from './Nav.css'
import { Button, ContactModal } from 'components'

const Nav = props => {
  const menuItems = [
    <Button large={1} to="/" active={props.location === '/' ? 1 : undefined}>
      Home
    </Button>,
    <Button
      large={1}
      to="/portfolio"
      active={props.location.includes('/portfolio') ? 1 : undefined}
    >
      Portfolio
    </Button>,
    <Button
      large={1}
      to="/about"
      active={props.location === '/about' ? 1 : undefined}
    >
      About
    </Button>,
    <ContactModal>
      {toggle => (
        <Button
          large={1}
          active={props.location === '/about/' ? 1 : undefined}
          onClick={toggle}
        >
          Contact
        </Button>
      )}
    </ContactModal>,
  ]
  return (
    <NavWrapper>
      <Menu>
        <Trail
          config={config.wobbly}
          items={menuItems}
          keys={menuItems.map((_, i) => i)}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {item => props => <MenuItem style={props}>{item}</MenuItem>}
        </Trail>
      </Menu>
    </NavWrapper>
  )
}

Nav.propTypes = {
  location: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export { Nav }
