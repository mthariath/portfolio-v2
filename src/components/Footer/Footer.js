import React from 'react'
import { FlavorContext } from 'utils'
import { Stripes, Logo } from 'components'
import { StyledFooter, LogoWrapper } from './Footer.css'

const Footer = props => (
  <FlavorContext.Consumer>
    {flavor => {
      return (
        <StyledFooter flavor={flavor}>
          <Stripes flip />
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <p>&copy;&nbsp;{new Date().getFullYear()}</p>
        </StyledFooter>
      )
    }}
  </FlavorContext.Consumer>
)

export { Footer }
