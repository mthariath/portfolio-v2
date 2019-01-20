import styled from 'styled-components'
import { animated } from 'react-spring'

export const ButtonWrapper = styled(animated.div)`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1000;
`

export const ContentWrapper = styled(animated.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
