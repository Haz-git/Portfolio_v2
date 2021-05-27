import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyles';

//Components:
import Navbar from './navbar/Navbar';
import MainHeroContainer from './hero_backdrop/MainHeroContainer';
import MainProjects from './projects/MainProjects';
import MainAboutMe from './aboutme/MainAboutMe';
import MainContactMeForm from './contactme/MainContactMeForm';
import MainFooter from './footer/MainFooter';

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
                <MainAboutMe />
                <MainContactMeForm />
                <MainFooter />
            </MainContainer>
        </>
    );
};

export default App;
