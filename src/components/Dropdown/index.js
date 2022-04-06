import React from "react";
import {
  DropdownContainer,
  DropdownList,
  DropdownWrapper,
  DropdownLink,
} from "./Dropdown.elements";

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle} >
      <DropdownList>
        <DropdownWrapper>
          <DropdownLink to="/" >Home</DropdownLink>
        </DropdownWrapper>
        <DropdownWrapper>
          <DropdownLink to="/about">About</DropdownLink>
        </DropdownWrapper>
        <DropdownWrapper>
          <DropdownLink to="/contact">Contact</DropdownLink>
        </DropdownWrapper>
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
