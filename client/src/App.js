import React from "react";
import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Navbar from "./components/Navbar";
import ImageCover from "./components/ImageCover";

const GlobalStyle = createGlobalStyle(
  (props) => `
  * {
    box-sizing: inherit;
  }
  
  body {
    background-color: ${props.theme.color.light};
    color: ${props.theme.color.dark};
    font-family: 
      ${props.theme.typography.font_primary}, ${props.theme.typography.font_fallback};
    margin: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
  }
`
);

// `
//   * {
//     box-sizing: inherit;
//   }

//   body {
//     background-color: ${(props) => props.theme.color.light};
//     color: ${(props) => props.theme.color.dark};
//     font-family: ${(props) => `
//       ${props.theme.font_primary}, ${props.theme.font_fallback};`}
//     margin: 0;
//     box-sizing: border-box;
//   }

//   a {
//     color: inherit;
//   }
// `;

function App(props) {
  const themeContext = useContext(ThemeContext);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <ImageCover></ImageCover>
      <h1>{console.log(themeContext)}</h1>
    </React.Fragment>
  );
}

export default App;
