import styled, { css } from 'styled-components'
import { MEDIA } from 'utils'

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill minmax(4.1rem 1fr));
  grid-auto-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  align-self: stretch;
  padding: 2rem 1rem 2rem;
  ${MEDIA.DESKTOP`
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    `}
  ${({ flex }) =>
    flex &&
    css`
      align-self: stretch;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      padding: 0;
      & > * {
        margin: 0.15rem;
        flex: 1;
      }
    `}
`
