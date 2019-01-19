import styled from 'styled-components'
import { flavors, MEDIA } from 'utils'

export const Wrapper = styled.span`
  background: ${({ flavor }) => flavors[flavor].fade};
  font-size: 0.72rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  padding: 0.1rem 0.3rem;
  border-radius: 2px;
  margin: ${({ margin }) => (margin ? '0.3rem 0.5rem 0 0' : '0')};
  text-transform: uppercase;
  ${MEDIA.MIN_XL`
    font-size: 0.85rem;
  `}
`
