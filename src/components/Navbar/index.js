import React from "react";
import {
  Nav,
  NavbarContainer,
  NavbarLogoText,
  NavbarLogo,
  NavbarBrandContainer,
  NavbarLink,
  LinkWrapper,
  LinkContainer,
  NavbarLinkItem,
  NavbarCollapseLogo
} from "./Navbar.elements";
import SpiderLogo from "./BrandLogo/SpiderIcon.svg";
import { GoThreeBars } from 'react-icons/go'

const Navbar = ({ isOpen, toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer >
          <NavbarBrandContainer >
            <NavbarLogo to="/">
              <img
                alt=""
                src={SpiderLogo}
                className="d-inline-block align-top"
              />{" "}
            </NavbarLogo>
            <NavbarLogoText to="/">SPENCER BARRETT</NavbarLogoText>
          </NavbarBrandContainer>
          <NavbarCollapseLogo onClick={toggle}>
            <GoThreeBars size={20}/>
          </NavbarCollapseLogo>
          <LinkWrapper>
          <LinkContainer>
            <NavbarLinkItem>
              <NavbarLink to="/">Home</NavbarLink>
            </NavbarLinkItem>
            <NavbarLinkItem>
              <NavbarLink to="/about">About</NavbarLink>
            </NavbarLinkItem>
            <NavbarLinkItem>
              <NavbarLink to="/contact">Contact</NavbarLink>
            </NavbarLinkItem>
          </LinkContainer>
          </LinkWrapper>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
