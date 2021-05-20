import React from 'react';
import styled from 'styled-components';

//Components:
import { MainHeader } from '../projects/MainProjects';
import DrawerComponent from './DrawerComponent';

//Styles:
const MainContainer = styled.section`
    margin-top: 5em;
`;

const MainAboutMe = () => {
    return (
        <MainContainer>
            <MainHeader>Q&A: About me!</MainHeader>
            <DrawerComponent question="Test question" answer="test answer" />
        </MainContainer>
    );
};

export default MainAboutMe;
