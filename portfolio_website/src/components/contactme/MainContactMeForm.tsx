import React from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';

//Components:
import { MainHeader } from '../projects/MainProjects';

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
        </MainContainer>
    );
};

export default MainContactMeForm;
