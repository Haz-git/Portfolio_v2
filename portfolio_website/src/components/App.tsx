import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyles';

//Components:
import Navbar from './navbar/Navbar';
import MainHeroContainer from './hero_backdrop/MainHeroContainer';
import MainProjects from './projects/MainProjects';

//Styles:
const MainContainer = styled.div``;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <MainContainer>
                <Navbar />
                <MainHeroContainer />
                <MainProjects />
            </MainContainer>
        </>
    );
};

export default App;
