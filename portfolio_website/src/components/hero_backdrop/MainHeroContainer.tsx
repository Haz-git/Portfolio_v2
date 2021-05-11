import React from 'react';
import styled from 'styled-components';
import { deviceMax, deviceMin } from '../../devices/breakpoints';

//Components:
import Herotext from './Herotext';
import heroimg from '../../imgs/heroimg.jpg';

//Icons:
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';

const ArrowIcon = styled(DownArrow)`
    margin: 0 1em;
    width: 1.4rem;
    height: 1.4rem;
    color: #ffffff;

    @media ${deviceMin.mobileS} {
        margin: 0 0.5em;
        width: 1rem;
        height: 1rem;
    }
`;

//Styles:

const MainContainer = styled.section`
    background: inherit;
    height: 100vh;
`;

const HeroItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 15%;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media ${deviceMin.mobileS} {
        display: flex;
        flex-direction: column-reverse;
        padding: 0 1em;
    }

    @media ${deviceMin.tablet} {
        flex-direction: row;
        padding: 0 5%;
    }
`;

const HeroImg = styled.img`
    height: 26rem;
    width: 26rem;
    border: 4px solid #fdbc3d;
    border-radius: 50%;
    box-shadow: rgba(13, 56, 72, 1) 7px 10px 50px;

    @media ${deviceMin.mobileS} {
        height: 11rem;
        width: 11rem;
        box-shadow: rgba(13, 56, 72, 1) 4px 8px 30px;
        margin-bottom: 1em;
    }

    @media ${deviceMin.mobileM} {
        height: 15rem;
        width: 15rem;
        box-shadow: rgba(13, 56, 72, 1) 4px 8px 30px;
        margin-bottom: 1em;
    }

    @media ${deviceMin.mobileL} {
        height: 18rem;
        width: 18rem;
        box-shadow: rgba(13, 56, 72, 1) 4px 8px 30px;
        margin-bottom: 1em;
    }

    @media ${deviceMin.tablet} {
        margin-left: 1em;
        height: 20rem;
        width: 20rem;
    }

    @media ${deviceMin.laptopS} {
        margin-left: 2em;
        height: 22rem;
        width: 22rem;
        box-shadow: rgba(13, 56, 72, 1) 4px 8px 30px;
        margin-bottom: 1em;
    }
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
    color: #ffffff;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    @media ${deviceMin.mobileS} {
        font-size: 0.8em;
        white-space: nowrap;
    }

    @media ${deviceMin.mobileM} {
        font-size: 0.8em;
        white-space: nowrap;
    }
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
