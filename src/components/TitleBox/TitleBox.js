import React from 'react'
import PropTypes from 'prop-types'
import { Box, Inner } from './TitleBox.css'
import { IconGrid, Title } from 'components'

const TitleBox = ({ title, grid, children, ...props }) => {
  return (
    <Box {...props}>
      {title && (
        <Title size={6} underline>
          {title}
        </Title>
      )}
      <Inner>{grid ? <IconGrid flex>{children}</IconGrid> : children}</Inner>
    </Box>
  )
}

TitleBox.propTypes = {
  grid: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  onClick: PropTypes.func,
  border: PropTypes.bool,
}

export { TitleBox }
