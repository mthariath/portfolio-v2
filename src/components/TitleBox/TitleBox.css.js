import styled, { css } from 'styled-components'
import { MEDIA } from 'utils'

export const Box = styled.div`
  box-shadow: 0px 0px 100px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  background-color: rgba(255, 255, 255, 0.95);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 6rem;
  margin: 4rem 10vw;
  ${MEDIA.DESKTOP`
        padding: 0.5rem;
        margin: 4rem 3vw;
    `}

  ${({ border }) =>
    border &&
    css`
        box-shadow: none;
        padding: 2rem 3rem
        margin: 1rem auto;
    `}
  ${({ small }) =>
    small &&
    css`
      box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.2);
      padding: 1rem 2rem;
      margin: 1rem auto;
      max-width: 100rem;
      ${MEDIA.DESKTOP`
        padding: 0rem;
        `}
    `}
`

export const Inner = styled.div`
  padding: 1rem 1rem;
  align-self: stretch;
`
