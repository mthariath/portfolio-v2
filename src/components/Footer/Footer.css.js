import styled from 'styled-components'
import { flavors, MEDIA } from 'utils'

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ flavor }) => flavors[flavor].pale};
  padding: 3rem;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
`
export const LogoWrapper = styled.div`
  ${MEDIA.DESKTOP`
    width: 10vw;
  `}
  width: 5vw;
`
