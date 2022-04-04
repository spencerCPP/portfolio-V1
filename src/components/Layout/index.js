import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Main from "../Main";
import { GlobalStyleBody, HeaderStyle, GridWrapper, FooterStyle } from "./Layout.elements";

const Layout = () => {
  return (
    <React.Fragment>
      <GlobalStyleBody />
      <GridWrapper>
        <HeaderStyle>
          <Navbar />
        </HeaderStyle>
        <Main />
        <FooterStyle>
          <Footer />
        </FooterStyle> 
      </GridWrapper>
    </React.Fragment>
  );
};

export default Layout;
