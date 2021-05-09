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
    height: 24rem;
    width: 24rem;
    border: 4px solid #fdbc3d;
    border-radius: 50%;
    box-shadow: rgba(13, 56, 72, 1) 7px 10px 50px;
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
