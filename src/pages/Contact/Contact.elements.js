import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
`;
export const ContactContent = styled.div`
  width: 100%;
  text-align: center;
`;

export const ContactHeader = styled.h1`
  font-family: "Work Sans", sans-serif;
  color: #fff;
`;

export const ContactPar = styled.p`
  font-family: "Work Sans", sans-serif;
  color: #fff;
  font-size: 12px;
`;

export const FormContent = styled.div`
  color: #fff;

  background-color: #0f0f0f;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr 1fr;
`;
export const FormContainer = styled.div`
  font-family: "Work Sans", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelDivisor = styled.div`
  padding: 1rem;
  grid-column-start: 1;
  grid-column-end: 2;
  &#yourNameLabel {
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &#messageLabel {
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &#emailLabel {
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

export const InputDivisor = styled.div`
  padding: 1rem;
  grid-column-start: 2;
  grid-column-end: 4;
  &#yourNameInput {
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &#emailInput {
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

export const CustomInput = styled.input``;

export const MessageDivisor = styled.div`
  padding: 1rem;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
`;

export const MessageInput = styled.textarea`
  box-sizing: border-box;
  min-width: 100%;
  min-height: 150px;
`;

export const ButtonDivisor = styled.div`
  padding: 1rem;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
`;

export const SubmitButton = styled.button`
  font-family: "Work Sans", sans-serif;
  cursor: pointer;
  grid-row-start: 5;
  grid-row-end: 6;
  min-width: 100%;
  border-radius: 8px;
  border-color: transparent;
  transition: ease-in-out 0.25s all;
  &:hover {
    background-color: #1f1f1f;
    color: #ffff;
  }
`;

export const CustomAlert = styled.alert