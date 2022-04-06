import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 998;
  min-width: 100%;
  height: 120px;
  background: #0f0f0f;
  top: 63px;
  transition: 0.3s ease-in-out;
  delay: 0.5s;
  height: ${({ isOpen }) => (isOpen ? "120px" : "0")};
overflow:hidden;

`;

export const DropdownList = styled.ul`
  display: grid;
  padding: 0px;
  margin: 0;
  padding-left: 10px;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 40px);
  text-align: center;
  transition: ease-out;

  ${'' /* @media screen and (max-width: 480px) {
    transition: 0.3s ease-in-out;
    grid-template-rows: repeat(3, 60px);

  } */}
`;

export const DropdownWrapper = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
`;

export const DropdownLink = styled(LinkR)`
  color: #fff;
  opacity: 0.7;
  font-size: 12px;
  text-decoration: none;
  text-family: 'Lato', sans-serif;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  :hover{
    opacity: 1;
  }
  @media screen and (max-width: 480px) {
      transition: 0.3s ease-in-out;
      font-size: 11px;
  }
`;
