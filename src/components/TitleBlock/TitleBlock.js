import React from 'react'
import PropTypes from 'prop-types'
import { Title } from 'components'

const TitleBlock = ({ title, subtitle }) => {
  return (
    <>
      <Title as="h1" size={1}>
        {title}
      </Title>
      {subtitle && (
        <Title as="h2" size={5}>
          {subtitle}
        </Title>
      )}
    </>
  )
}

TitleBlock.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
}

export { TitleBlock }
