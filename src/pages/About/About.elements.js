import styled from 'styled-components';

export const AboutContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
margin: 40px;


`
export const AboutContent = styled.div`
width: 100%;
text-align: center;

`

export const AboutHeader = styled.h1`

font-family: 'Work Sans', sans-serif;
color: #fff;
`

export const AboutPar = styled.p`
font-family: 'Work Sans', sans-serif;
color: #fff;
font-size: 18px;
display:flex;
justify-content: center;
max-width: 800px;

`

export const FirstDiv = styled.div`

margin: 20px;
`

export const ParDiv = styled.div`
display: flex;
justify-content:center;
align-items: center;
`

export const AboutPictureContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

export const TechSpan = styled.span`
@keyframes technologies{
    
    from{color: #fff} 
to {color #23f1f1}
}
animation-name: technologies;
animation-duration: 3s;
animation-fill-mode: forwards;
`

export const Img = styled.img`
width: 50px;
padding: 10px;

height: 50px;
transition: 0.3s ease-in-out;
cursor: pointer;
:hover {scale: 1.25;}

`
export const InvertImg = styled.img`
padding: 10px;

width: 50px;
height: 50px;
filter: invert(100%);
transition: 0.3s ease-in-out;
cursor: pointer;
:hover {scale: 1.25;}
`
export const CreditsCont = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px;
margin-top: 50px;
`
export const Credits= styled.p`
font-family: 'Work Sans', sans-serif;
color: #fff;
opacity: 0.5;
`

export const iconImg = styled.img`
`