import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

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
`;
export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;
export const NotFoundContainer = styled.ul`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 100%;
  background: #0f0f0f;
  padding: 0;
`;

export const NotFoundContent = styled.li`
  display: inline-block;
  list-style: none;
  color: #fff;
  font-family: "Work Sans", sans-serif;
  text-align: center;
  margin: 10px;
`;

export const LinkWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10px;
`

export const ReturnLink = styled(LinkR)`
  cursor: pointer;
  color: black;
  background-color: #a2a2a2;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  text-decoration: none;
  transition: 0.2s all ease-in;
  &:hover {
    transition: 0.2s all ease-out;
    transform: scale(1.1);
    color: white;
    background: #ff5733;
    font-weight: bold;
  }
`;
