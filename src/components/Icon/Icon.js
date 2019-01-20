import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, IconWrapper } from './Icon.css.js'
import { icons } from './icons'
import { Chip } from 'components'

const Icon = ({ icon, size, className, color, style, caption }) => {
  const iconObject = icons[icon] ? icons[icon].paths : icons.warning.paths
  const iconText = icons[icon] ? icons[icon].text : icons.warning.text
  const paths = iconObject.map((shape, i) => (
    <path key={i} d={shape.path} fill={color ? color : shape.color} />
  ))
  return caption ? (
    <Wrapper>
      <IconWrapper
        size={size}
        color={color}
        className={className}
        style={style}
      >
        <svg viewBox="0 0 1024 1024">{paths}</svg>
      </IconWrapper>
      <Chip>{iconText}</Chip>
    </Wrapper>
  ) : (
    <IconWrapper size={size} color={color} className={className} style={style}>
      <svg viewBox="0 0 1024 1024">{paths}</svg>
    </IconWrapper>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['medium', 'small', 'large', 'jumbo']),
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  caption: PropTypes.bool,
}

export { Icon }
