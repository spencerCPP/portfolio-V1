import styled from "styled-components";

export const MainContainer = styled.div`
justify-content: center;
align-items: center;
background-color: #fff;
background: transparent;
`

export const MainContent = styled.div`
top: 4rem;
left: 0;
right:0;
background-color: #000;
opacity: 0.35;
margin-top: 0;
margin-left:40px;
margin-right: 40px;
margin-bottom: 40px;
`
export const VideoPlayer = styled.video`
width: 100%;
height: 100%;
${'' /* -o-object-fit: cover;
object-fit: cover; */}
background: #333;
z-index: 3;
`
