import React from 'react';
import styled from 'styled-components';

//Styles:

const MainContainer = styled.div``;

const MainText = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 1.8em;
    color: #fdbc3d;
`;

const Herotext = () => {
    return (
        <MainContainer>
            <MainText>Hey! I'm Harry, a Software Engineer.</MainText>
        </MainContainer>
    );
};

export default Herotext;
