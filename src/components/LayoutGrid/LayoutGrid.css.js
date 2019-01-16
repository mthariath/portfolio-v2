import styled from 'styled-components'
import { MEDIA } from 'utils'
export const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 5vw 160px 3fr 5vw max-content 5vw;
  grid-template-rows: 3.5vw 18vh 2vw minmax(0, min-content) min-content 1fr max-content;
  grid-template-areas:
    '. . . . . .'
    '. logo res-nav res-nav res-nav .'
    '. . . . . .'
    '. title title . nav .'
    '. main main . nav .'
    '. main main . sideBar .'
    'footer footer footer footer footer footer';
  min-height: 100vh;
  ${MEDIA.TABLET`
    display: grid;
    grid-template-columns: 5vw minmax(70px, min-content) 3fr 5vw 2fr 5vw;
    grid-template-rows: 5vw 15vh 5vw minmax(0, min-content) min-content 1fr max-content max-content;
    grid-template-areas: 
        ". . . . . ."
        ". logo res-nav res-nav res-nav ."
        ". . . . . ."
        ". title title . . ."
        ". main main main main ."
        ". main main main main ."
        ". sideBar sideBar sideBar sideBar ."
        "footer footer footer footer footer footer";
  `}
  ${MEDIA.PHONE`
    display: grid;
    grid-template-columns: 5vw minmax(70px, min-content) 3fr 5vw 2fr 5vw;
    grid-template-rows: 5vw 15vh 5vw minmax(0, min-content)  min-content 1fr max-content max-content;
    grid-template-areas: 
        ". . . . . ."
        ". logo res-nav res-nav res-nav res-nav res-nav "   
        ". . . . . ."
        ". title title . . ."
        ". main main main main ."
        ". main main main main ."
        ". sideBar sideBar sideBar sideBar ."
        "footer footer footer footer footer footer";
  `}
`
