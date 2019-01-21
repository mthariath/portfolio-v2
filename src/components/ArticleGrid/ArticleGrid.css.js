import styled from 'styled-components'
import { MEDIA } from 'utils'

export const Grid = styled.article`
  ${MEDIA.MIN_XL`

    display: grid;
    grid-template-columns: 5vw minmax(0px, 1fr) minmax(0px, 5fr) 5vw;
    grid-template-rows: max-content minmax(0px, 2fr);
    grid-template-areas:
        '. title title .'
        '. . intro .';
`}
`

export const TitleWrapper = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
`
export const ContentWrapper = styled.div`
  grid-area: intro;
`
