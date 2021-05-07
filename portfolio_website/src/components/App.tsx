import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyles';

//Components:
import Navbar from './navbar/Navbar';

//Styles:
const MainContainer = styled.div``;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <MainContainer>
                <Navbar />
            </MainContainer>
        </>
    );
};

export default App;
