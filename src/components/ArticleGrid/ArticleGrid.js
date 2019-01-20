import React from 'react'
import PropTypes from 'prop-types'
import { Grid, TitleWrapper, ContentWrapper } from './ArticleGrid.css'
import { TitleBlock } from 'components'
import { Trail, config } from 'react-spring'

const ArticleGrid = ({ children, title, subtitle }) => {
  const titleElement = title && <TitleBlock title={title} subtitle={subtitle} />

  const items = [{ title: true, el: titleElement }, children]

  return (
    <Grid>
      <Trail
        items={items}
        config={config.slow}
        from={{ transform: 'translate3d(0,75px,0)' }}
        to={{ transform: 'translate3d(0,0px,0)' }}
        keys={items.map((_, i) => i)}
      >
        {item => props =>
          item.title ? (
            <TitleWrapper style={props}>{item.el}</TitleWrapper>
          ) : (
            <ContentWrapper style={props}>{item}</ContentWrapper>
          )}
      </Trail>
    </Grid>
  )
}

ArticleGrid.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
}

export { ArticleGrid }
