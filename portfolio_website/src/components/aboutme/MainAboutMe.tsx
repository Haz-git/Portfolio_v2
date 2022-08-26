import React from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';
import { Element } from 'react-scroll';

//Components:
import { MainHeader } from '../projects/MainProjects';
import DrawerComponent from './DrawerComponent';

//Styles:
const MainContainer = styled.section`
    margin-top: 5em;
    padding: 0 1em;

    @media ${deviceMin.tablet} {
        margin-top: 5rem;
        padding: 0 2rem;
    }

    @media ${deviceMin.laptopS} {
        padding: 0 16.5%;
    }

    @media ${deviceMin.desktopS} {
        padding: 0 25%;
    }
`;

const MainDrawerContainer = styled.div`
    /* @media ${deviceMin.tablet} {
        padding: 0 2rem;
    } */
`;

const DrawerContainer = styled.div`
    margin: 0.8em 0;
`;

const MainAboutMe = () => {
    return (
        <Element name="aboutmecontainer">
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
                            answer="During my Molecular/Micro-biology career, I also dabbled in bioinformatics. Bioinformatics taught me basic scripts, and then I started tinkering with code on my own time. I fell in love with the idea of bringing what I want to see in the software world to life. I created my first SaaS start up by creating a fully functional full stack web application called 'Petri' that my research lab members used. I discussed new features and bugs every day with my colleagues, and grew passionate about end-to-end development, especially in web applications."
                        />
                    </DrawerContainer>
                    <DrawerContainer>
                        <DrawerComponent
                            question="What are you working on right now?"
                            answer="Currently, I'm working on the final touches of my master's research in addition to improving my latest SaaS Start Up-- PushPull"
                        />
                    </DrawerContainer>
                    <DrawerContainer>
                        <DrawerComponent
                            question="What's important to you in tech?"
                            answer="Growth, mentorship, and frequent challenges are some qualities I look for in a career."
                        />
                    </DrawerContainer>
                    <DrawerContainer>
                        <DrawerComponent
                            question="Are you available for hire?"
                            answer="I'm presently working as a Full Stack Software Engineer in my role at Aicadium. However, I'm always open to discuss new opportunities. Don't hesitate to reach out!"
                        />
                    </DrawerContainer>
                </MainDrawerContainer>
            </MainContainer>
        </Element>
    );
};

export default MainAboutMe;
