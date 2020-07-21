const globalStyles = (props) => {
  return `* {
        box-sizing: inherit;
      }

      html {
        height: 100%;
      }
      
      body {
        background-color: ${props.theme.color.light};
        color: ${props.theme.color.dark};
        font-size:  ${props.theme.space[1]};
        font-family: 
          ${props.theme.typography.font_primary}, ${props.theme.typography.font_fallback};
        font-weight:  ${props.theme.typography.medium};
        margin: 0;
        box-sizing: border-box;
        min-height: 100vh;
      
      }

      #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
    
      a {
        color: inherit;
      }
    
      h1 {
        font-size:  ${props.theme.space[3]};
      }
    
      h2 {
        font-size:   ${props.theme.space[2.5]}
      }
    
      h3 {
        font-size:   ${props.theme.space[1.75]}
      }
    
      h4 {
        font-size:  ${props.theme.space[1.5]};
      }
    
      h5 {
        font-size:   ${props.theme.space[1.25]};
      }
    
      h6 {
        font-size:  ${props.theme.space[1]};
      };

      p {
        font-size:  ${props.theme.space[1]};
      }`;
};

export default globalStyles;
