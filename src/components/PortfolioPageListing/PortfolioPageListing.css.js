import styled from 'styled-components'
import { MEDIA, flavors } from 'utils'
export const Wrapper = styled.article`
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  filter: brightness(0.9);
  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    z-index: 100;
    filter: brightness(1);
    transition: all 0.5s 0s cubic-bezier(0.82, 0.22, 0.44, 1.52);
    outline: none;
  }
  &:hover > a > *,
  &:active > a > *,
  &:focus > a > *,
  &:focus-within > a > * {
    transform: scale(1.05) translateY(-01rem);
    transition: all 0.5s 0s cubic-bezier(0.82, 0.22, 0.44, 1.52);
  }

  &,
  & > a > * {
    transition: all 0.3s 0.2s cubic-bezier(0.82, 0.22, 0.44, 1.52);
  }
  ${MEDIA.DESKTOP`
    min-width: 90%;
  `}
`

export const DescriptionBox = styled.div`
  transform: translateY(-100%);
  position: absolute;
  background: ${({ flavor }) => flavors[flavor].bg};
  padding: 1.5rem 1rem;
  box-sizing: border-box;
  width: 90%;
  margin: 0 5%;
  box-shadow: 0px 0px 100px 0px rgba(0, 0, 0, 0.2);
  z-index: -1;
  transition: all 0.1s 0s cubic-bezier(0.82, 0.22, 0.44, 1.1);
  opacity: 0;
  ${Wrapper}:hover &,
  ${Wrapper}:focus &,
  ${Wrapper}:active &,
  ${Wrapper}:focus-within & {
    transform: translateY(-1rem);
    opacity: 1;
    transition: all 0.3s 0.25s cubic-bezier(0.82, 0.22, 0.44, 1.1);
    outline: none;
  }
`
export const ChipWrapper = styled.div`
  margin: 0.3rem 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`
