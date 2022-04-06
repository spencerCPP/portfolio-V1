import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyleBody = createGlobalStyle`
html, body{
  height: 100vh;
  margin: 0;
  position: relative;
  background-color: #0f0f0f;
}

body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',  'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  'sans-serif';
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
#root{
    height: 100vh;
    background-color: #0f0f0f;
    margin: 0;
}
footer{
    height: 6rem;
}
header{
  height: 4rem;
}
ul {
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}
`;

export const HeaderStyle = styled.header`
  header {
  
  }
`;

export const FooterStyle = styled.footer`
  footer {
    background-color: purple;
    position: fixed;
  }
`;

export const GridWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;
