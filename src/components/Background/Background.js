import React, { Component } from 'react'
import { FlavorContext } from 'utils'
import { Container } from './Background.css'
// import { Stripes } from "./Stripes";

class Background extends Component {
  render() {
    return (
      <FlavorContext.Consumer>
        {flavor => {
          return <Container flavor={flavor} />
        }}
      </FlavorContext.Consumer>
    )
  }
}

export { Background }
