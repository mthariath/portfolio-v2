import React from 'react'
import PropTypes from 'prop-types'
import { Spring, config, animated } from 'react-spring'

const Fade = ({ children, config: configProp, direction }) => {
  const Wrapper = animated.div
  return (
    <Spring
      native
      from={{
        opacity: 0,
        transform:
          direction === 'up'
            ? 'translateY(100px)'
            : direction === 'down'
            ? 'translateY(-100px)'
            : direction === 'left'
            ? 'translateX(100px)'
            : direction === 'right'
            ? 'translateX(-100px)'
            : undefined,
      }}
      to={{
        opacity: 1,
        transform:
          direction === 'up' || direction === 'down'
            ? 'translateY(0px)'
            : direction === 'left' || direction === 'right'
            ? 'translateX(0px)'
            : undefined,
      }}
      leave={{ opacity: 0 }}
      config={config[configProp]}
    >
      {props => <Wrapper style={props}>{children}</Wrapper>}
    </Spring>
  )
}

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  config: PropTypes.oneOf([
    'molasses',
    'gentle',
    'slow',
    'stiff',
    'wobbly',
    'default',
  ]),
}

Fade.defaultProps = {
  config: 'gentle',
}
export { Fade }
