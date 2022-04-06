import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #0f0f0f;
  min-height: 4rem;
  z-index: 999;
  position: fixed;
  min-width: 100%;
`;
export const NavbarContainer = styled.div`
  min-height: 4rem;
  z-index: 1;
  width: 100%;
  display: flex;
  
`;

export const NavbarBrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2px;
`;

export const NavbarLogo = styled(LinkR)`
  color: #fff;
  display: inline-block;
  justify-self: flex-start;
  cursor: pointer;
  margin-left: 10px;
  text-decoration: none;
  img {
    width: 45px;
    height: 45px;
  }
  ${'' /* @media screen and (max-width: 769px) {
    img {
      width: 35px;
      height: 35px;
    }
  } */}
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

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    margin-left: auto;
  
`;

export const LinkContainer = styled.ul`

margin: 1.25rem;
  

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const NavbarLinkItem = styled.li`
float: left;
  margin-left: 1.25rem;
  list-style: none;
 
`;

export const NavbarLink = styled(LinkR)`
  color: #a5a5a5;
  opacity: 0.75;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  :hover {
    opacity: 1;
  }
`;

export const NavbarCollapse = styled.div`

`

export const NavbarCollapseLogo = styled.div`
  display: none;

  @media screen and (max-width: 769px) {
    color: #a5a5a5;
    opacity: 0.75;
    cursor: pointer;
    border: 1px solid #a5a5a5;
    border-radius: 10%;
    :hover {
      opacity: 1;
    }
    display: flex;
    position: absolute;
    top: 20px;
    right: 10px;
  }
`;
