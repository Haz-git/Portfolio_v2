import React from 'react';
import styled from 'styled-components';
import { deviceMax, deviceMin } from '../../devices/breakpoints';

//Components:
import Button from './Button';

//Styles:

const MainContainer = styled.div`
    text-align: left;
`;

const MainText = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 2.2em;
    color: #fdbc3d;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    font-weight: 900;

    @media ${deviceMin.mobileS} {
        font-size: 1.3em;
    }

    @media ${deviceMin.mobileM} {
        font-size: 1.3em;
        white-space: nowrap;
    }

    @media ${deviceMin.mobileL} {
        font-size: 1.5em;
        white-space: nowrap;
    }

    /* @media ${deviceMax.tablet} {
        font-size: 1.8em;
    } */
`;

const DescContainer = styled.div`
    margin: 2em 0;
    width: 100%;

    @media ${deviceMin.mobileS} {
        margin: 1em 0;
        width: 100%;
    }

    /* @media ${deviceMax.tablet} {
        width: 100%;
    } */
`;

const DescText = styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 1.4em;
    color: rgba(255, 255, 255, 1);
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    font-weight: 100;
    @media ${deviceMin.mobileS} {
        font-size: 0.9em;
        word-break: break-word;
        hyphens: auto;
    }

    @media ${deviceMin.mobileM} {
        font-size: 1em;
        word-break: break-word;
        hyphens: auto;
    }

    @media ${deviceMin.mobileL} {
        font-size: 1.1em;
        word-break: break-word;
        hyphens: auto;
    }

    /* @media ${deviceMax.tablet} {
        font-size: 1.3em;
    } */
`;

const Herotext = () => {
    return (
        <MainContainer>
            <MainText>Hey! I'm Harry, a Software Engineer.</MainText>
            <DescContainer>
                <DescText>
                    By day, I'm a master's candidate studying Microbiology with
                    a love for everything tech and research. At night, I'm a
                    self-taught web developer and data wrangler working in
                    UCSD's Research IT Services.
                </DescText>
            </DescContainer>
            <Button />
        </MainContainer>
    );
};

export default Herotext;
