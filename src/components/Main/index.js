import React from "react";
import { useState } from "react";
import { ImageWrapper, MainContainer, MainContent, CImage, SliderContainer, SliderWrapper, SpencerSpan, SubHeaderWrapper, SubMainContainer, SubMainContent, VideoPlayer, WorkContainer, WorkHeader, BImage, SoftwareContainer, SoftwareHead } from "./Main.elements";
import Video from "../Videos/video.mp4";
import Poster from "../Videos/cover.png";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {

  return (
    <>
      {/* <MainContainer> */}
      <SubMainContainer>

        <SubMainContent>
          <SubHeaderWrapper>

            <h1 style={{ color: "white" }}>
              Hello,<br></br>
              My Name is,<br></br>
              <SpencerSpan>Spencer</SpencerSpan>
            </h1>
            <br></br>
            <SoftwareContainer>
            <SoftwareHead>Software Developer</SoftwareHead>
            </SoftwareContainer>
            
          </SubHeaderWrapper>

        </SubMainContent>
        <SliderWrapper>
          <WorkContainer>
            <WorkHeader>
              My projects
            </WorkHeader>
          </WorkContainer>
          <SliderContainer>
            <ImageWrapper>
              <a href="https://github.com/jjung2684/CS2450-Project1/blob/main/README.md">
                <BImage src="https://user-images.githubusercontent.com/89826196/212251568-28ce7a45-fbeb-42b7-b565-43518344980b.png" /></a>
            </ImageWrapper>
            <ImageWrapper>
              <a href="https://github.com/jjung2684/CS2450-Project1/blob/main/README.md">
                <BImage src="https://user-images.githubusercontent.com/89826196/212251433-88aec574-a6de-45b6-b51d-4fcd337fac24.png" /></a>
            </ImageWrapper>
            <ImageWrapper>

              <a href="https://github.com/jjung2684/CS2450-AndroidProject">
                <CImage src="https://user-images.githubusercontent.com/89826196/206612846-23bfbd4e-3af0-4546-b35f-3d73ff6b7034.png" /></a>
            </ImageWrapper>
            <ImageWrapper>
              <a href="https://github.com/jjung2684/CS2450-AndroidProject">
                <CImage src="https://user-images.githubusercontent.com/89826196/206613019-449edcbf-6b3e-4341-9b08-f80e9c05e0ab.png" /></a>
            </ImageWrapper>
          </SliderContainer>
        </SliderWrapper>
      </SubMainContainer>

      {/* <MainContent>  
          <VideoPlayer autoPlay loop muted playsInline src={Video} poster={Poster} type="video/mp4" />
        
        </MainContent> */}
      {/* </MainContainer> */}
    </>
  );
};

export default Main;
