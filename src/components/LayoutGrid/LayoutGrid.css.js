import styled, { css } from 'styled-components'
import { MEDIA, flavors } from 'utils'
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
  /* a {
    text-decoration: underline;
    position: relative;
    font-weight: 600;
    transition: all 0.2s cubic-bezier(0.82, 0.22, 0.44, 1.52);
    color: ${({ flavor }) => flavors[flavor].pale};
  }

  a:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  } */

  /* LINK STYLING BEGIN */
  a {
  text-decoration: underline;
  position: relative;
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.82, 0.22, 0.44, 1.52);
  color: ${({ flavor }) => flavors[flavor].pale};

}

a:hover {
  color: ${({ flavor }) => flavors[flavor].button};
}

*::selection {
  color: ${({ flavor }) => flavors[flavor].button};
  background: ${({ flavor }) => flavors[flavor].main}
}

/* PARAGRAPH STYLING BEGIN */
p, li {
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  font-family: 'Raleway', sans-serif;
  margin: 0 0 2rem 0;
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
}
li {
  line-height: 1.1;
  margin: 0;
  margin-left: 1rem;
}
`
