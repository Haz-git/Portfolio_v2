import React from 'react';
import styled from 'styled-components';

//Styles:
const MainContainer = styled.div`
    margin-top: 3em;
    border-top: 1px solid #fdbc3d;
    background: #010d1a;
    padding: 1.5em 1em;
    text-align: center;
    color: #fdbc3d;
    font-family: 'Nunito', sans-serif;
    font-size: 0.8em;
    font-weight: 700;
`;

//Render:

const MainFooter = () => {
    return (
        <MainContainer>
            Created by Harry Zhou <span>&copy;</span> 2021{' '}
        </MainContainer>
    );
};

export default MainFooter;
