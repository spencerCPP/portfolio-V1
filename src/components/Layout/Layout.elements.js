import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyleBody = createGlobalStyle`
body{
    height: 100vh;
    background-color: #000;
    margin: 0;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',  'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  'sans-serif';
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
#root{
    height: 100vh;
    background-color: #000;
    margin: 0;
}
footer{
    height: 6rem;
}
`;

export const HeaderStyle = styled.header`
  header {
    display: inline-block;
    background-color: red;
    z-index: 1000;
    height: 60px;
  }
`;

export const FooterStyle = styled.footer`
  footer {
    background-color: purple;
  }
`;

export const GridWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;
