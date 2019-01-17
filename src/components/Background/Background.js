import React, { Component } from 'react'
import { FlavorContext } from 'utils'
import { Container } from './Background.css'
import { Stripes } from 'components'

class Background extends Component {
  render() {
    return (
      <FlavorContext.Consumer>
        {flavor => {
          return (
            <Container flavor={flavor}>
              <Stripes />
            </Container>
          )
        }}
      </FlavorContext.Consumer>
    )
  }
}

export { Background }
