import styled from 'styled-components'
import { MEDIA } from 'utils'

const sizes = {
  medium: { wrapper: 36, icon: 36, border: 2 },
  large: { wrapper: 48, icon: 48, border: 2 },
  jumbo: { wrapper: 72, icon: 72, border: 2 },
  default: { wrapper: 24, icon: 24, border: 1 },
}

export const IconWrapper = styled.i`
  transition: all 0.25s ease;
  width: ${({ size }) =>
    size ? `${sizes[size].wrapper}px` : `${sizes.default.wrapper}px`};
  height: ${({ size }) =>
    size ? `${sizes[size].wrapper}px` : `${sizes.default.wrapper}px`};
  border-radius: 100%;
  display: inline-flex;
  svg {
    margin: auto;
    width: ${({ size }) =>
      size ? `${sizes[size].icon}px` : `${sizes.default.icon}px`};
    height: ${({ size }) =>
      size ? `${sizes[size].icon}px` : `${sizes.default.icon}px`};
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ small }) => (small ? '2rem' : '3rem')};
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.82, 0.22, 0.44, 1.52);
  &:hover {
    transform: scale(1.05);
  }
  ${MEDIA.DESKTOP`
      font-size: ${({ small }) => (small ? '1.5rem' : '2rem')}
    `}
`
