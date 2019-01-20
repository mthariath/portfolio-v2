import styled from 'styled-components'
import { flavors, MEDIA } from 'utils'
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.618fr;
  background: ${({ flavor }) => flavors[flavor].bg};
  box-shadow: 0px 0px 100px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
  ${MEDIA.LARGE`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr, min-content;
  `}
`

export const Content = styled.div`
  padding: 2rem 3rem;
  ${MEDIA.TABLET`
    padding: 1rem;
  `}
`
