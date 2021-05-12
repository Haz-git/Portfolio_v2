import React from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';

//Components:
import ProjectItem from './ProjectItem';
import gymjotImg from '../../imgs/gymjot_project.png';

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
`;

const MainProjects = () => {
    return (
        <MainContainer>
            <MainHeader>My Projects</MainHeader>
            <ProjectItem
                header="GymJot"
                desc="GymJot is an original, mobile/desktop compatible, progressive webapp built for powerlifting and fitness workflows."
                image={gymjotImg}
                buildTools={['test', 'test']}
            />
        </MainContainer>
    );
};

export default MainProjects;
