import styled from 'styled-components'
import { MEDIA } from 'utils'
export const Wrapper = styled.div`
  padding: 1rem 3rem;
  ${MEDIA.MIN_XL`
    padding: 2rem 8rem;

    `}
  ${MEDIA.TABLET`
    padding: 1rem;
    
    `}
`
