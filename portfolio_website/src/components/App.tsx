import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyles';

//Components:
import Navbar from './navbar/Navbar';
import MainHeroContainer from './hero_backdrop/MainHeroContainer';

//Styles:
const MainContainer = styled.div``;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <MainContainer>
                <Navbar />
                <MainHeroContainer />
            </MainContainer>
        </>
    );
};

export default App;
