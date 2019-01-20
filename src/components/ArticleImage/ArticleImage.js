import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { ImageCaption } from 'components'
import { Wrapper } from './ArticleImage.css'

const ArticleImage = ({ image, caption }) => {
  return (
    <Wrapper>
      <Img
        alt={caption}
        fluid={{
          ...image,
          aspectRatio: 1.618 / 1,
        }}
      />
      <ImageCaption>{caption}</ImageCaption>
    </Wrapper>
  )
}

ArticleImage.propTypes = {
  image: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
}

export { ArticleImage }
