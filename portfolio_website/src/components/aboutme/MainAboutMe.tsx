import React from 'react';
import styled from 'styled-components';

//Components:
import { MainHeader } from '../projects/MainProjects';
import DrawerComponent from './DrawerComponent';

//Styles:
const MainContainer = styled.section`
    margin-top: 5em;
    padding: 0 1em;
`;

const DrawerContainer = styled.div`
    margin: 0.5em 0;
`;

const MainAboutMe = () => {
    return (
        <MainContainer>
            <MainHeader>Q&A: About me!</MainHeader>
            <DrawerContainer>
                <DrawerComponent
                    question="Where are you based?"
                    answer="I'm currently based in San Diego, CA."
                />
            </DrawerContainer>
            <DrawerContainer>
                <DrawerComponent
                    question="Why did you learn code as a Microbiologist?"
                    answer="During my microbiology career, I dabbled in bioinformatics. Through bioinformatics and my current job, I started tinkering with code more and fell in love. The rest is history!"
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
                    question="Are you available for hire?"
                    answer="I'm presently working as a Systems Integration Engineer III in my role at UCSD Research IT Services. However, I'm always open to discuss new opportunities. Don't hesitate to reach out!"
                />
            </DrawerContainer>
        </MainContainer>
    );
};

export default MainAboutMe;
