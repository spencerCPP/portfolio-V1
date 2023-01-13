

import React, { useState, useRef } from "react";
import {
  ButtonDivisor,
  ContactContainer,
  ContactContent,
  ContactHeader,
  CustomInput,
  FormContainer,
  FormContent,
  InputDivisor,
  LabelDivisor,
  MessageDivisor,
  MessageInput,
  SubmitButton,
} from "./Contact.elements";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [errors, setErrors] = useState({
    fromError: 'Your name field is empty',
    messageError: 'Your message field is empty',
    replyError: 'Your email field is invalid'

  });
 
  const [sendInfo, setSendInfo] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  })

  const initialState = {
    from_name: '',
    message: '',
    reply_to: '',
  }

  const onSubmitClick = () => {
    emailSetup().then(clearState);
  };

  const clearState = () => {
    setSendInfo({ ...initialState });
    
  }


  function emailSetup() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if(sendInfo.from_name.length <= 0){
      tempErrors["from"] = true;
      isValid = false;
    }
    if(sendInfo.message.length <= 0){
      tempErrors["message"] = true;
      isValid = false;
    }
    if(sendInfo.reply_to.length <= 0){
      tempErrors["reply_to"] = true;
      isValid = false;
    }
    
    setErrors(tempErrors => ({ ...tempErrors }));
    let string = '';
    for(let x in errors){

      
        string += errors[x] + " ";
      
    }
    // alert(string);
    console.log(string);
    return isValid;
  }
  
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
      emailjs.sendForm('service_1pkp5bd', 'template_dannqoe', form.current, 'ivrYYmF5_UCR7EJ0x')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    }
    else{
      console.log();
    }
    

  // e.target.reset();

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSendInfo(prevState => ({ ...prevState, [name]: value }));
  }


  return (
    <>
      <ContactContainer>
        <ContactContent>
          <ContactHeader>Contact</ContactHeader>
          <FormContainer>
            <div>
              <form id='myForm' ref={form} onSubmit={sendEmail}>
                <FormContent>
                  <LabelDivisor id="yourNameLabel">
                    <label htmlFor='from_name'>Your Name: </label>
                  </LabelDivisor>
                  <InputDivisor id="yourNameInput">
                    <CustomInput
                      id='from_name'
                      type='text'
                      name='from_name'
                      placeholder='Your name'
                      value={sendInfo.from_name}
                      onChange={handleChange}
                    />
                  </InputDivisor>
                  <LabelDivisor id="messageLabel">
                    <label htmlFor='message'>Message: </label>
                  </LabelDivisor>
                  <MessageDivisor id="messageInput">
                    <MessageInput
                      id='message'
                      type='text'
                      name='message'
                      placeholder='Your message'
                      value={sendInfo.message}
                      onChange={handleChange}
                    />
                  </MessageDivisor>
                  <LabelDivisor id="emailLabel">
                    <label htmlFor='reply_to'>Your Email: </label>
                  </LabelDivisor>
                  <InputDivisor id="emailInput">
                    <CustomInput
                      id='reply_to'
                      type='email'
                      name='reply_to'
                      placeholder='Your email'
                      value={sendInfo.reply_to}
                      onChange={handleChange}
                    />
                  </InputDivisor>
                  <ButtonDivisor>
                    <SubmitButton onClick={onSubmitClick} type='submit' id="button1">Submit</SubmitButton>
                  </ButtonDivisor>
                </FormContent>

              </form>
            </div>
          </FormContainer>
        </ContactContent>

      </ContactContainer>
    </>
  );
};

export default Contact;
