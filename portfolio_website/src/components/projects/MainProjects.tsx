import React from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';

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

const MainHeader = styled.h1`
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
        <MainContainer>
            <MainHeader>My Projects</MainHeader>
            <ProjectItemContainer>
                <ProjectItem
                    header="GymJot"
                    desc="GymJot is an original, mobile/desktop compatible, progressive webapp built for powerlifting and fitness workflows. This app is still being actively worked on and improved."
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
                />
            </ProjectItemContainer>
            <ProjectItemContainer>
                <ProjectItem
                    header="Petri"
                    desc="Petri is an original, browser-based webapp I developed to increase research workflow and productivity for my lab at UCSD. This app is still being actively worked on and improved."
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
                />
            </ProjectItemContainer>
            <ProjectItemContainer>
                <ProjectItem
                    header="Portfolio"
                    desc="This portfolio website was built with a simple and elegant design in mind."
                    image={portfolioImg}
                    buildTools={['html', 'css', 'js', 'react']}
                />
            </ProjectItemContainer>
        </MainContainer>
    );
};

export default MainProjects;
