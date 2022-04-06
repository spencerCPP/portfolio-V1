import React from "react";
import GitLogo from "../Svgs/githubLogo.svg";
import LinkedLogo from "../Svgs/LinkedLogo.svg";
import anime from 'animejs/lib/anime.es.js';

import {
  SidebarContainer,
  SidebarItemList,
  SidebarItem,
  SidebarLink,
} from "./Sidebar.elements";

function linkHover() {
    anime({
      targets: "#linkedInHover",
      scaleX: { value: 1.25, duration: 120, easing: "easeInOutBack" },
  
      scaleY: { value: 1.25, duration: 120, easing: "easeInOutBack" },
    });
  }
  
  function linkHoverOff() {
    anime({
      targets: "#linkedInHover",
  
      scaleX: { value: 1, duration: 120, easing: "spring(1, 80, 10, 0)" },
  
      scaleY: { value: 1, duration: 120, easing: "spring(1, 80, 10, 0)" },
    });
  }
  
  function gitHover() {
    anime({
      targets: "#gitHover",
      scaleX: { value: 1.25, duration: 120, easing: "spring(1, 80, 10, 0)" },
      scaleY: { value: 1.25, duration: 120, easing: "spring(1, 80, 10, 0)" },
    });
  }
  
  function gitHoverOff() {
    anime({
      targets: "#gitHover",
  
      scaleX: { value: 1, duration: 120, easing: "easeOutExpo" },
  
      scaleY: { value: 1, duration: 120, easing: "easeOutExpo" },
    });
  }

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarItemList>
          <SidebarItem id="gitHover">
            <SidebarLink  href="https://github.com/spencerCPP/" onMouseOver={gitHover}
            onMouseLeave={gitHoverOff}>
            <img
            
                alt=""
                src={GitLogo}
                height="15px"
                width="15px"
              />{" "}
            </SidebarLink>
          </SidebarItem>
          <SidebarItem id="linkedInHover">
            <SidebarLink href="https://www.linkedin.com/in/barrettspencer/" onMouseOver={linkHover}
            onMouseLeave={linkHoverOff}>
            <img
                alt=""
                src={LinkedLogo}
                height="14px"
                width="14px"
              />{" "}
            
            </SidebarLink>
          </SidebarItem>
        </SidebarItemList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
