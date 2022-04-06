import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Dropdown from "../Dropdown";
import { Outlet } from "react-router-dom";
import {
  GlobalStyleBody,
  HeaderStyle,
  GridWrapper,
  FooterStyle,
} from "./Layout.elements";
import Sidebar from "../Sidebar";



const Layout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <React.Fragment>
      <GlobalStyleBody />
      <Sidebar />
      <GridWrapper>
        <HeaderStyle>
          <Dropdown isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
        </HeaderStyle>
       
        <Outlet />
        <FooterStyle>
          <Footer />
        </FooterStyle>
      </GridWrapper>
    </React.Fragment>
  );
};

export default Layout;
