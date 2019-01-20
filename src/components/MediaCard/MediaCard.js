import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { FlavorContext } from 'utils'
import { Wrapper, Content } from './MediaCard.css'

const MediaCard = ({ image, alt, children }) => {
  return (
    <FlavorContext.Consumer>
      {flavor => (
        <Wrapper flavor={flavor}>
          <Img
            fluid={{
              ...image,
              aspectRatio: 1.618 / 1,
            }}
            alt={alt}
          />
          <Content>{children}</Content>
        </Wrapper>
      )}
    </FlavorContext.Consumer>
  )
}

MediaCard.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export { MediaCard }
