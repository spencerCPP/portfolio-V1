import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #0f0f0f;
  height: 4rem;
  z-index: 10;
  position: sticky;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  height: 4rem;
  z-index: 1;
  width: 100%;
  display: flex;
`;

export const NavbarBrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-left: 2px;
`;

export const NavbarLogo = styled(LinkR)`
  color: #fff;
  display: inline-block;
  justify-self: flex-start;
  cursor: pointer;
  margin-left: 10px;
  text-decoration: none;
`;

export const NavbarLogoText = styled(LinkR)`
  color: #fff;
  display: inline-block;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 15px;
  text-decoration: none;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 0.4em;
  padding-bottom: 4px;
  padding-left: 7px;
  opacity: 0.6;
`;
