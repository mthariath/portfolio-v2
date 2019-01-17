import styled, { css } from 'styled-components'
import { MEDIA } from 'utils'

export const Paragraph = styled.p`
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  font-family: 'Raleway', sans-serif;
  ${MEDIA.TABLET`
    font-size: 1rem;
    letter-spacing: 0.5px;
  `}
  ${MEDIA.MIN_TABLET`
    ${MEDIA.DESKTOP` 
        font-size: 1.4rem;
        letter-spacing: 1.8px;
    `}
  `}
  ${MEDIA.MIN_DESKTOP`
    ${MEDIA.XL`
        font-size: 1.6rem;
        letter-spacing: 2px;
    `}
  `}
  ${MEDIA.MIN_XL`
    font-size: 2rem;
    letter-spacing: 3px;
    line-height: 1.3;
  `}
  ${({ small }) =>
    small &&
    css`
        letter-spacing: 0;
        line-height: 1.1;
        ${MEDIA.TABLET`
            font-size: 0.8rem;

        `}
        ${MEDIA.MIN_TABLET`
            ${MEDIA.DESKTOP` 
                font-size: 1rem;

            `}
        `}
        ${MEDIA.MIN_DESKTOP`
            ${MEDIA.XL`
                font-size: 1.1rem;

            `}
        `}
        ${MEDIA.MIN_XL`
            font-size: 1.2rem;
        `}
    `}

    text-align: ${({ center }) => (center ? 'center' : 'left')}
`
