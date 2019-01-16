import React from "react";

const flavors = {
  teal: {
    main: "hsl(174, 74%, 75%)",
    button: "hsl(167, 49%, 65%)",
    pale: "hsl(170, 61%, 75%)",
    bold: "hsl(174, 74%, 50%)",
    bg: "hsl(167, 100%, 98%)",
    fade: "hsl(165, 100%, 93%)"
  },
  lavender: {
    main: "hsl(272, 93%, 73%)",
    button: "hsl(252, 53%, 73%)",
    pale: "hsl(267, 65%, 70%)",
    bold: "hsl(267, 74%, 50%)",
    bg: "hsl(273, 100%, 98%)",
    fade: "hsl(270, 100%, 93%)"
  },
  orange: {
    main: "hsl(50, 90%, 78%)",
    button: "hsl(50, 59%, 66%)",
    pale: "hsl(50, 69%, 75%)",
    bold: "hsl(50, 70%, 50%)",
    bg: "hsl(50, 100%, 98%)",
    fade: "hsl(50, 100%, 93%)"
  },
  cherry: {
    main: "hsl(200, 90%, 78%)",
    button: "hsl(200, 59%, 66%)",
    pale: "hsl(200, 69%, 75%)",
    bold: "hsl(200, 70%, 50%)",
    bg: "hsl(200, 100%, 98%)",
    fade: "hsl(200, 100%, 93%)"
  }
};

const FlavorContext = React.createContext(
  flavors.teal // default value
);

export { FlavorContext, flavors };
