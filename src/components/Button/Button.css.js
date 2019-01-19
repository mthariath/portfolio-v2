import styled, { css } from 'styled-components'
import { MEDIA, flavors } from 'utils'

export const StyledButton = styled.button`
  padding: 0rem 0rem;
  text-align: center;
  text-transform: lowercase;
  font-weight: 900;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.85) !important;
  font-family: 'Lobster Two', cursive;
  display: inline-block;
  user-select: none;
  font-size: 1.3rem;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.82, 0.22, 0.44, 1.52);
  background: none;
  position: relative;
  z-index: 1;
  border: none;
  text-decoration: none !important;
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ color, flavor }) =>
      color ? flavors[color].button : flavors[flavor].button};
    z-index: -1;
    width: 0;
    height: 3px;
    bottom: 0;
    transition: all 0.3s cubic-bezier(0.82, 0.22, 0.44, 1.52);
    transform: translateY(0px);
    border-radius: 2px;
    left: 50%;
    ${({ active }) =>
      active &&
      css`
        width: 100%;
        left: 0%;
      `}
  }


  &:hover,
  &:active,
  &:focus {
    outline: none;
    transform: scale(1.1);
    ::after {
    /* width: 100%; */
    /* left: 0%; */
    }
  }

  /* start standard button media queries */

    ${MEDIA.MIN_DESKTOP`
        ${MEDIA.XL`
            &::after {
                transform: translateY(-3.5px);
            }
            `}
            `}

    ${MEDIA.MIN_TABLET`
        ${MEDIA.DESKTOP`
            &::after {
                transform: translateY(-3px);
            }
        `}
    `}
    ${MEDIA.TABLET`
        font-size: 1.5rem;
        &::after {
            transform: translateY(0px);
        }
    `}
    ${MEDIA.PHONE`
    &::after {   
        transform: translateY(1.65px);
    }

    `}
    ${MEDIA.MIN_PHONE`
          &:hover,
            &:active,
            &:focus {
                ::after {
                width: 100%;
                left: 0%;
                }
            }
    `}

  /* start LARGE button styling */
  ${({ large }) =>
    large &&
    css`
        &::after {
            height: 8px;
        }
        ${MEDIA.MIN_DESKTOP`
            ${MEDIA.XL`
                    font-size: 3.5rem;
            
                `}

        `}
        ${MEDIA.MIN_XL`
            font-size: 4.5rem;
        `}
        ${MEDIA.MIN_TABLET`
            ${MEDIA.DESKTOP`
                font-size: 3rem;
                &::after {
                    height: 6px;
                }
            `}
        `}
        ${MEDIA.TABLET`
            font-size: 1.5rem;
            &::after {
                height: 4px;
            }
        `}
        ${MEDIA.PHONE`
            font-size: 1.3rem;
        `}

    `}

    /* start ICON button styling */

    ${({ icon }) =>
      icon &&
      css`
        font-size: 32px;
        display: inline;
        &::after {
          transform: translateY(3px);
          height: 8px;
        }
        &:hover::after,
        &:active::after,
        &:focus::after {
          width: 50%;
          left: 25%;
          height: 8px;
        }
        ${MEDIA.DESKTOP`
            font-size: 60px;
        `}
      `}
    
`
