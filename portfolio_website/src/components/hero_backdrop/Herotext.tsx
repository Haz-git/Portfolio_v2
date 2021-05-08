import React from 'react';
import styled from 'styled-components';

//Styles:

const MainContainer = styled.div`
    text-align: left;
    /* width: 37em; */
`;

const MainText = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 2.2em;
    color: #fdbc3d;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
`;

const DescContainer = styled.div`
    margin: 2em 0;
    width: 36em;
`;

const DescText = styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 1.4em;
    color: rgba(255, 255, 255, 1);
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
`;

const Herotext = () => {
    return (
        <MainContainer>
            <MainText>Hey! I'm Harry, a Software Engineer.</MainText>
            <DescContainer>
                <DescText>
                    By day, I'm a master's candidate in Microbiology with a love
                    for everything tech and research. At night, I'm a
                    self-taught web developer and data wrangler working in
                    UCSD's Research IT Services.
                </DescText>
            </DescContainer>
        </MainContainer>
    );
};

export default Herotext;
