import React from 'react';
import styled from 'styled-components';

//Styles:

const MainContainer = styled.section`
    margin-top: 20em;
    padding: 1.5em 15%;
`;

const MainHeader = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 2em;
    font-weight: 900;
    color: white;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    text-align: center;
`;

const MainProjects = () => {
    return (
        <MainContainer>
            <MainHeader>Projects</MainHeader>
        </MainContainer>
    );
};

export default MainProjects;
