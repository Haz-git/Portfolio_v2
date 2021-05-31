import React, { useState } from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';

//Components:
import { MainHeader } from '../projects/MainProjects';
import InputField from './InputField';
import Button from '../hero_backdrop/Button';
import * as EmailValidator from 'email-validator';
import * as emailjs from 'emailjs-com';

//Styles:

const MainContainer = styled.section`
    padding: 0 1em;
    margin-top: 2em;
`;

const ContactHeader = styled(MainHeader)`
    margin: 0;
`;

const DescContainer = styled.div`
    text-align: left;
    margin: 1em 0;
`;

const MainDesc = styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 0.9em;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;

    @media ${deviceMin.mobileM} {
        font-size: 1em;
    }

    @media ${deviceMin.mobileL} {
        font-size: 1em;
    }

    @media ${deviceMin.tablet} {
        font-size: 1em;
    }

    @media ${deviceMin.laptopS} {
        font-size: 1.1em;
    }
`;

const InputFieldsContainer = styled.div``;

const InputContainer = styled.div``;

const InputDesc = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 1em;
    font-weight: 700;
    color: #fdbc3d;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    text-align: left;
    margin: 0.5em 0;
`;

const InputTextArea = styled.textarea<InputTextFieldType>`
    width: 100%;
    padding: 0.5em 1em;
    border-radius: 0.3em;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 1px;
    box-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    background: #1b222a;
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1em;
    resize: none;
    transition: all 0.2s ease-in-out;
    border: ${(InputTextFieldType) =>
        InputTextFieldType.inputValueError === false
            ? '1px solid #1b222a'
            : '1px solid red'};
`;

const ButtonContainer = styled.div`
    margin: 1em 0;
`;

//Type for styled-component

interface InputTextFieldType {
    inputValueError?: boolean;
}

//Render:

const MainContactMeForm = () => {
    //States:
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    //Error states:
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [msgError, setMsgError] = useState(false);

    //Form handlers:
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    };

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserMessage(e.target.value);
    };

    //Empty Checker:

    const checkEmptyValues = () => {
        if (userName === '' || userEmail === '' || userMessage === '') {
            return false;
        } else {
            return true;
        }
    };

    //EmailJS setup:
    let templateParams = {
        user_email: userEmail,
        from_name: userName,
        to_name: 'Harry',
        message: userMessage,
    };

    //helper form resetter:
    const resetForm = () => {
        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };

    //Submit Handler:
    const submitEmailMessage = () => {
        if (checkEmptyValues() && EmailValidator.validate(userEmail)) {
            emailjs.send(
                'personal_website_v2',
                'template_1kalp2u',
                templateParams,
                'user_1eDpqP05zoCB3CLCEncXA'
            );

            resetForm();
            alert('Your email message has been sent!');
        } else {
            setNameError(true);
            setEmailError(true);
            setMsgError(true);
        }
    };

    return (
        <MainContainer>
            <ContactHeader>Send me stuff</ContactHeader>
            <DescContainer>
                <MainDesc>
                    Want to know how I built my projects? Do you have an
                    interesting project we can collaborate on? Send me an email
                    and let's talk!
                </MainDesc>
            </DescContainer>
            <InputFieldsContainer>
                <InputContainer>
                    <InputDesc>Name</InputDesc>
                    <InputField
                        onUserChange={handleName}
                        inputValue={userName}
                        inputValueError={nameError}
                    />
                </InputContainer>
                <InputContainer>
                    <InputDesc>Email Address</InputDesc>
                    <InputField
                        type="email"
                        onUserChange={handleEmail}
                        inputValue={userEmail}
                        inputValueError={emailError}
                    />
                </InputContainer>
                <InputContainer>
                    <InputDesc>Your Message</InputDesc>
                    <InputTextArea
                        rows={10}
                        onChange={(e) => handleMessage(e)}
                        value={userMessage}
                        inputValueError={msgError}
                    />
                </InputContainer>
            </InputFieldsContainer>
            <ButtonContainer>
                <Button
                    label="Send"
                    btnTextColor="inherit"
                    btnBackground="#fdbc3d"
                    onClick={submitEmailMessage}
                />
            </ButtonContainer>
        </MainContainer>
    );
};

export default MainContactMeForm;
