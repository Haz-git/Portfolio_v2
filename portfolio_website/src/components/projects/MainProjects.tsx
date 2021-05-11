import React from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';

//Components:
import ProjectItem from './ProjectItem';

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
        padding: 0 1em;
        font-size: 1.3em;
    }
`;

const MainProjects = () => {
    return (
        <MainContainer>
            <MainHeader>My Projects</MainHeader>
            <ProjectItem
                header="GymJot"
                desc="GymJot is a passion project for lifters.GymJot is a passion
                    project for lifters. GymJot is a passion project for
                    lifters. GymJot is a passion project for lifters. GymJot is
                    a passion project for lifters."
            />
        </MainContainer>
    );
};

export default MainProjects;
