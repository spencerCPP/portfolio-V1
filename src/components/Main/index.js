import React from "react";
import { MainContainer, MainContent, VideoPlayer } from "./Main.elements";
import Video from "../Videos/video.mp4";
import Poster from "../Videos/cover.png";
const Main = () => {

  return (
    <>
      <MainContainer>
        <MainContent>  
          <VideoPlayer autoPlay loop muted playsInline src={Video} poster={Poster} type="video/mp4" />
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Main;
