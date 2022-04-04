import React from "react";
import {
  Nav,
  NavbarContainer,
  NavbarLogoText,
  NavbarLogo,
  NavbarBrandContainer,
} from "./Navbar.elements";
import SpiderLogo from "./BrandLogo/SpiderIcon.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarBrandContainer>
            <NavbarLogo to="/">
              <img
                alt=""
                src={SpiderLogo}
                width="45"
                height="45"
                className="d-inline-block align-top"
              />{" "}
            </NavbarLogo>
            <NavbarLogoText to="/">SPENCER BARRETT</NavbarLogoText>
          </NavbarBrandContainer>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
