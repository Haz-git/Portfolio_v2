import React from 'react';
import styled from 'styled-components';

//Components:
import Herotext from './Herotext';
import heroimg from '../../imgs/heroimg.jpg';

//Icons:
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';

const ArrowIcon = styled(DownArrow)`
    margin: 0 1em;
    width: 1.4rem;
    height: 1.4rem;
    color: #fdbc3d;
`;

//Styles:

const MainContainer = styled.section`
    background: inherit;
    height: 100vh;
`;

const HeroItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 15%;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
`;

const HeroImg = styled.img`
    height: 26rem;
    width: 26rem;
    border: 4px solid #fdbc3d;
    border-radius: 50%;
    box-shadow: rgba(13, 56, 72, 1) 7px 10px 50px;
`;

const ProjectsArrowContainer = styled.div`
    position: absolute;
    left: 50%;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 1.5em;
`;

const ProjectsText = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 1.3em;
    font-weight: 700;
    color: #fdbc3d;
`;

const MainHeroContainer = () => {
    return (
        <MainContainer>
            <HeroItemContainer>
                <Herotext />
                <HeroImg src={heroimg} />
            </HeroItemContainer>
            <ProjectsArrowContainer>
                <ProjectsText>
                    <ArrowIcon />
                    Check out my work
                    <ArrowIcon />
                </ProjectsText>
            </ProjectsArrowContainer>
        </MainContainer>
    );
};

export default MainHeroContainer;
