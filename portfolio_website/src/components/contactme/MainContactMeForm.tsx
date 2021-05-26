import React from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';

//Components:
import { MainHeader } from '../projects/MainProjects';
import InputField from './InputField';

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

//Render:

const MainContactMeForm = () => {
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
                    <InputField />
                </InputContainer>
                <InputContainer>
                    <InputDesc>Email Address</InputDesc>
                    <InputField />
                </InputContainer>
                <InputContainer>
                    <InputDesc>Your Message</InputDesc>
                    <InputTextArea rows={10} />
                </InputContainer>
            </InputFieldsContainer>
        </MainContainer>
    );
};

export default MainContactMeForm;
