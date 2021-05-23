import React from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';

//Components:
import { MainHeader } from '../projects/MainProjects';
import DrawerComponent from './DrawerComponent';

//Styles:
const MainContainer = styled.section`
    margin-top: 5em;
    padding: 0 1em;

    @media ${deviceMin.laptopS} {
        padding: 0 15%;
    }
`;

const MainDrawerContainer = styled.div`
    @media ${deviceMin.tablet} {
        padding: 0 2rem;
    }
`;

const DrawerContainer = styled.div`
    margin: 0.8em 0;
`;

const MainAboutMe = () => {
    return (
        <MainContainer>
            <MainHeader>Q&A: About me!</MainHeader>
            <MainDrawerContainer>
                <DrawerContainer>
                    <DrawerComponent
                        question="Where are you based?"
                        answer="I'm currently based in San Diego, CA."
                    />
                </DrawerContainer>
                <DrawerContainer>
                    <DrawerComponent
                        question="Why did you learn to code?"
                        answer="During my microbiology career, I dabbled in bioinformatics. Through bioinformatics and my current job, I started tinkering with code more often and fell in love. The rest is history!"
                    />
                </DrawerContainer>
                <DrawerContainer>
                    <DrawerComponent
                        question="What are you working on right now?"
                        answer="Currently, I'm working on finishing my master's research about insertional elements in E. coli in addition to improving my two largest personal projects-- GymJot and Petri."
                    />
                </DrawerContainer>
                <DrawerContainer>
                    <DrawerComponent
                        question="What's important to you in tech?"
                        answer="Growth, mentorship, and challenge are some qualities I look for in a career."
                    />
                </DrawerContainer>
                <DrawerContainer>
                    <DrawerComponent
                        question="Are you available for hire?"
                        answer="I'm presently working as a Systems Integration Engineer III in my role at UCSD Research IT Services. However, I'm always open to discuss new opportunities. Don't hesitate to reach out!"
                    />
                </DrawerContainer>
            </MainDrawerContainer>
        </MainContainer>
    );
};

export default MainAboutMe;
