import styled, { css } from 'styled-components'
import { MEDIA, flavors } from 'utils'

export const StyledTitle = styled.h3`
  font-family: 'Lobster Two', cursive;
  color: rgba(0, 0, 0, 0.8);
  margin: 0;
  position: relative;
  user-select: none;
  display: inline-block;
  z-index: 1;
    ${({ underline }) =>
      underline &&
      css`
        &::after {
          content: '';
          position: absolute;
          z-index: -1;
          width: 0;
          height: 5px;
          bottom: 0;
          transition: all 0.3s cubic-bezier(0.82, 0.22, 0.44, 1.52);
          transform: translateY(3px);
          left: 20%;
          width: 60%;
          background: ${({ color, flavor }) =>
            color ? flavors[color].button : flavors[flavor].button};
        }
      `}
    ${MEDIA.DESKTOP`
        ${({ size }) => {
          switch (size) {
            case 1:
              return css`
                font-size: 2.7rem;
              `
            case 2:
              return css`
                font-size: 2.5rem;
              `
            case 3:
            default:
              return css`
                font-size: 2rem;
              `
            case 4:
              return css`
                font-size: 1.7rem;
                font-weight: inherit;
              `
            case 5:
              return css`
                font-size: 1.4rem;
                font-weight: inherit;
              `
            case 6:
              return css`
                font-size: 1.15rem;
                font-weight: inherit;
              `
          }
        }}
    `} 
    
    ${MEDIA.MIN_DESKTOP`
        ${MEDIA.XL`
            ${({ size }) => {
              switch (size) {
                case 1:
                  return css`
                    font-size: 4.5rem;
                  `
                case 2:
                  return css`
                    font-size: 3.75rem;
                  `
                case 3:
                default:
                  return css`
                    font-size: 3rem;
                  `
                case 4:
                  return css`
                    font-size: 2.25rem;
                  `
                case 5:
                  return css`
                    font-size: 1.75rem;
                  `
                case 6:
                  return css`
                    font-size: 1.2rem;
                  `
              }
            }}
        `}
    `} ${MEDIA.MIN_XL`
        ${({ size }) => {
          switch (size) {
            case 1:
              return css`
                font-size: 6rem;
              `
            case 2:
              return css`
                font-size: 5rem;
              `
            case 3:
            default:
              return css`
                font-size: 4rem;
              `
            case 4:
              return css`
                font-size: 3rem;
              `
            case 5:
              return css`
                font-size: 2rem;
              `
            case 6:
              return css`
                font-size: 1.2rem;
              `
          }
        }}
    `};
`
