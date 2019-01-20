import styled from 'styled-components'
import { flavors } from 'utils'
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  & a {
    color: ${({ flavor }) => flavors[flavor].pale};
  }
  & a::after {
    background: ${({ flavor }) => flavors[flavor].pale};
  }
  & a:hover {
    color: ${({ flavor }) => flavors[flavor].fade};
  }
  & a:hover::after {
    background: ${({ flavor }) => flavors[flavor].fade};
  }
  & *::selection {
    background: ${({ flavor }) => flavors[flavor].main};
    color: ${({ flavor }) => flavors[flavor].bold};
  }
`
