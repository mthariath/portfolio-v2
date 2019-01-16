import styled from 'styled-components'
import { flavors } from 'utils'

export const Container = styled.div`
  background-color: ${({ flavor }) => flavors[flavor].bg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: 150vw;
  background-repeat: no-repeat;
  background-position: 100% 0;
`
