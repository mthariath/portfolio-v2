import styled from 'styled-components'
import { MEDIA } from 'utils'
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${MEDIA.PHONE`
  flex-direction: column;
`}
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${MEDIA.PHONE`
    margin: 0.5rem 0;
  `}
`
