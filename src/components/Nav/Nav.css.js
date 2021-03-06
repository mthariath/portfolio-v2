import styled from 'styled-components'
import { MEDIA } from 'utils'

export const Menu = styled.ul`
  grid-area: nav;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
  ${MEDIA.TABLET`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    grid-area: res-nav;
    align-content: flex-end;
`}
`

export const MenuItem = styled.li`
  margin: 1vh 0;
  ${MEDIA.TABLET`
    margin: 0.2rem;
`}
`

export const NavWrapper = styled.nav`
  grid-area: nav;
  ${MEDIA.TABLET`
    grid-area: res-nav;
  `}
`
