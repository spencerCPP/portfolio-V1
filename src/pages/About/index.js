import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutHeader,
  AboutPar,
  AboutPictureContainer,
  CreditsCont,
  Credits,
  FirstDiv,
  Img,
  InvertImg,
  ParDiv,
  TechSpan
} from "./About.elements";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutContent>
          <FirstDiv>
            <AboutHeader>About</AboutHeader>

            <ParDiv>

              <AboutPar>
                Hello, my name is Spencer Barrett. I am a 24 year old student and am currently
                studying computer science at Cal Poly Pomona in California. Something to know about me is that I am
                driven and motivated to make improvements in the world using my experience in programming to produce applications that are both visually stimulating and functional. My ultimate goal is to be employed within the software development world building systems from the ground up.
              </AboutPar>
            </ParDiv>
          </FirstDiv>
          <div style={{height: "200px"}}></div>
          <div>
            <AboutHeader>
              I have experience in the following <TechSpan>technologies</TechSpan>:
            </AboutHeader>
          </div>

          <AboutPictureContainer>
            <a href="https://www.gnu.org/software/bash/">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" title="bash"></Img></a>
            <a href="https://cplusplus.com/">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" title="cplusplus" /></a>
            <a href="https://www.cprogramming.com/">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" title="c"></Img></a>

            <a href="https://www.css3.info/">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" title="css3" /></a>

            <a href="https://expressjs.com/">
              <InvertImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="expressjs" /></a>
            <a href="https://github.com">
              <InvertImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" title="github" /></a>

            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title="html5"/></a>

            <a href="https://java.com">

              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title="java"/></a>

            <a href="https://javascript.com">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="javascript"/></a>

            <a href="https://linux.org">
              <InvertImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg" title="linux"/></a>

            <a href="https://nodejs.org">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="nodejs"/></a>

            <a href="https://photoshop.com">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" title="photoshop"/></a>
              <a href="https://www.adobe.com/products/illustrator.html">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" title="illustrator"/></a>


            <a href="https://python.org">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" title="python"/></a>

            <a href="https://reactjs.org">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" title="reactjs"/></a>

            <a href="https://developer.android.com/studio">
              <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" title="android"/></a>
            

          </AboutPictureContainer>
          <CreditsCont>
            <Credits>
            This portfolio was built from scratch utilizing React, Html5, Css3, Javascript, Linux, and Github
            </Credits>
          </CreditsCont>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default About;
