import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';

//Components:
import { MainHeader } from '../projects/MainProjects';
import InputField from './InputField';
import Button from '../hero_backdrop/Button';

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

const InputTextArea = styled.textarea`
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
`;

const ButtonContainer = styled.div`
    margin: 1em 0;
`;

//Render:

const MainContactMeForm = () => {
    //States:
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    //Form handlers:
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserName(e.target.value);
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserEmail(e.target.value);
    };

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
        setUserMessage(e.target.value);
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
                    <InputField onUserChange={handleName} />
                </InputContainer>
                <InputContainer>
                    <InputDesc>Email Address</InputDesc>
                    <InputField type="email" onUserChange={handleEmail} />
                </InputContainer>
                <InputContainer>
                    <InputDesc>Your Message</InputDesc>
                    <InputTextArea
                        rows={10}
                        onChange={(e) => handleMessage(e)}
                    />
                </InputContainer>
            </InputFieldsContainer>
            <ButtonContainer>
                <Button
                    label="Send"
                    btnTextColor="inherit"
                    btnBackground="#fdbc3d"
                />
            </ButtonContainer>
        </MainContainer>
    );
};

export default MainContactMeForm;
