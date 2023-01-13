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

export const SubMainContainer = styled.div`
margin: 2rem;
display: flex;
background-color: #171717;
align-items: center;
justify-content:flex-start;
`

export const SubMainContent = styled.div`
margin: 30px;
display: flex;
align-items: center;
justify-content: center;
`
export const SubHeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
font-family: 'Work Sans', sans-serif;
font-size: 50px;

`
export const SliderContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;


`
export const WorkContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const WorkHeader = styled.h1`
font-family: 'Work Sans', sans-serif;
margin-top: 10px;
color: #fff;
`
export const BImage = styled.img`
height: auto;
width: 400px;
:hover{
    scale: 1.03;
}
`

export const CImage = styled.img`
height: auto;
width: 200px;
@media only screen and (min-width: 1200px) {
    100px}
    :hover{
    scale: 1.03;
}
`

export const SoftwareContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin: 30px;
`

export const SoftwareHead = styled.h1`
font-family: 'Work Sans', sans-serif;
font-size: 30px;
color: #fff;
opacity: 0.10;

`

export const SliderWrapper= styled.div`
display: flex;
flex-direction: column;
margin: 30px;
margin-left: auto;
background-color: #1b1b1b;
border-style: solid;
border-width: 1px;
border-color: #0f0f0f;
`

export const ImageWrapper = styled.div`
margin: 20px;
`

export const SpencerSpan = styled.span`
@keyframes technologies{
    
    from{color: #fff} 
to {color #23f1f1}
}
animation-name: technologies;
animation-duration: 3s;
animation-fill-mode: forwards;
`

export const VideoPlayer = styled.video`
width: 100%;
height: 100%;
${'' /* -o-object-fit: cover;
object-fit: cover; */}
background: #333;
z-index: 3;
`
