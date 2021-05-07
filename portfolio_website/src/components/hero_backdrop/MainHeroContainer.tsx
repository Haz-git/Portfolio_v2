import React from 'react';
import styled from 'styled-components';

//Components:
import Herotext from './Herotext';
import heroimg from '../../imgs/heroimg.jpg';

//Styles:
const MainContainer = styled.section`
    background: inherit;
    height: 100vh;
`;

const HeroItemContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
`;

const HeroImg = styled.img`
    height: 30rem;
    width: 30rem;
    border: 1px solid #fdbc3d;
    border-radius: 50%;
`;

const MainHeroContainer = () => {
    return (
        <MainContainer>
            <HeroItemContainer>
                <Herotext />
                <HeroImg src={heroimg} />
            </HeroItemContainer>
        </MainContainer>
    );
};

export default MainHeroContainer;
