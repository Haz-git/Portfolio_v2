import React from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';
import { Element } from 'react-scroll';

//Components:
import ProjectItem from './ProjectItem';
import gymjotImg from '../../imgs/gymjot_project.png';
import petriImg from '../../imgs/petri_project.png';
import portfolioImg from '../../imgs/portfolio_project.png';

//Styles:

const MainContainer = styled.section`
    margin-top: 2em;
    padding: 1.5em 15%;

    @media ${deviceMin.mobileS} {
        padding: 0 1em;
    }
`;

export const MainHeader = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 2em;
    font-weight: 900;
    color: #fdbc3d;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    text-align: center;

    @media ${deviceMin.mobileS} {
        margin-bottom: 3em;
        font-size: 1.3em;
    }

    @media ${deviceMin.tablet} {
        font-size: 2em;
        margin-bottom: 3em;
    }

    @media ${deviceMin.laptopS} {
        font-size: 2em;
        margin-bottom: 5em;
    }
`;

const ProjectItemContainer = styled.div`
    margin: 2em 0;

    @media ${deviceMin.tablet} {
        margin: 4em 0;
    }

    @media ${deviceMin.laptopS} {
        margin: 8em 0;
    }
`;

const MainProjects = () => {
    return (
        <Element name="projectcontainer">
            <MainContainer>
                <MainHeader>My Projects</MainHeader>
                <ProjectItemContainer>
                    <ProjectItem
                        header="PushPull"
                        desc={`PushPull is an original, responsive, webapp I solely developed for fitness coaches.
                         This project includes a complex workout templating engine involving auto-saving, drag and drop, file system architecture, link sharing, PDF printing, and more. This app is ongoing, actively worked on, and improved.`}
                        image={gymjotImg}
                        buildTools={[
                            'html',
                            'css',
                            'ts',
                            'js',
                            'react',
                            'redux',
                            'node',
                            'postgres',
                            'express',
                        ]}
                        viewCodeDest="https://github.com/Haz-git/PushPull-client"
                        testLiveDest="https://gopushpull.com"
                    />
                </ProjectItemContainer>
                <ProjectItemContainer>
                    <ProjectItem
                        header="GymJot"
                        desc="GymJot is an original, mobile/desktop compatible, progressive webapp built for powerlifting and fitness workflows. Features of this project include user stat-logs to record exercise progress as well as an extensive system to build custom, runnable workout routines."
                        image={gymjotImg}
                        buildTools={[
                            'html',
                            'css',
                            'js',
                            'react',
                            'redux',
                            'node',
                            'mongo',
                            'express',
                        ]}
                        viewCodeDest="https://github.com/Haz-git/barbellbuilder_client"
                        testLiveDest="https://gymjot.netlify.app/"
                    />
                </ProjectItemContainer>
                <ProjectItemContainer>
                    <ProjectItem
                        header="Petri"
                        desc="Petri is an original, browser-based webapp I developed to increase the research productivity for my lab members at in the Saier Lab, located at UCSD. This project involves a collection of research-oriented productivity applications, including a dynamic calendar, real-time messenger, file system, and a custom data visualizer for beta-galactosidase assays"
                        image={petriImg}
                        buildTools={[
                            'html',
                            'css',
                            'js',
                            'react',
                            'redux',
                            'node',
                            'mongo',
                            'express',
                        ]}
                        viewCodeDest="https://github.com/Haz-git/Petri_Client_Build"
                        testLiveDest="https://petriweb.netlify.app/"
                    />
                </ProjectItemContainer>
                <ProjectItemContainer>
                    <ProjectItem
                        header="My Personal Website"
                        desc="This portfolio website was built with a simple and elegant design in mind. Additionally, creating this website was an introduction to Typescript."
                        image={portfolioImg}
                        buildTools={['html', 'css', 'js', 'ts', 'react']}
                        viewCodeDest="https://github.com/Haz-git/Portfolio_v2"
                        testLiveDest="https://harryzhou.netlify.app/"
                    />
                </ProjectItemContainer>
            </MainContainer>
        </Element>
    );
};

export default MainProjects;
