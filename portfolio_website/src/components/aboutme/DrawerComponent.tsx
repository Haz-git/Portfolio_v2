import React, { useState } from 'react';
import styled from 'styled-components';
import { deviceMin } from '../../devices/breakpoints';

//Styles:
const MainContainer = styled.button<MainContainerProps>`
    background: ${(MainContainerProps) =>
        MainContainerProps.isRevealed === false ? '#1b222a' : 'inherit'};
    padding: ${(MainContainerProps) =>
        MainContainerProps.isRevealed === false ? '1em 1em' : '.5em 0'};
    border-radius: 0.5em;
    transition: 0.2s all ease-out;
    cursor: ${(MainContainerProps) =>
        MainContainerProps.isRevealed === false ? 'pointer' : 'default'};
    box-shadow: ${(MainContainerProps) =>
        MainContainerProps.isRevealed === false
            ? 'rgba(0, 0, 0, 1) 0px 3px 3px'
            : 'none'};
    transition: all 0.3s ease;

    &:hover {
        transform: ${(MainContainerProps) =>
            MainContainerProps.isRevealed === false ? 'scale(1.05)' : 'None'};
    }
`;

const QuestionContainer = styled.div`
    text-align: left;
`;

const QuestionText = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    font-weight: 700;

    @media ${deviceMin.mobileM} {
        font-size: 1.2rem;
    }

    @media ${deviceMin.mobileL} {
        font-size: 1.3rem;
    }

    @media ${deviceMin.tablet} {
        font-size: 1.5rem;
    }
`;

const AnswerContainer = styled.div`
    text-align: left;
`;

const AnswerText = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    color: white;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    font-weight: 700;

    @media ${deviceMin.mobileM} {
        font-size: 1.2rem;
    }

    @media ${deviceMin.mobileL} {
        font-size: 1.3rem;
    }

    @media ${deviceMin.tablet} {
        font-size: 1.5rem;
    }
`;

//Interface:
interface DrawerProps {
    question: string;
    answer: string;
}

interface MainContainerProps {
    isRevealed?: boolean;
}

const DrawerComponent = ({ question, answer }: DrawerProps): JSX.Element => {
    const [showAns, setShowAns] = useState(false);

    const handleShowAns = () => {
        setShowAns(true);
    };

    return (
        <MainContainer onClick={handleShowAns} isRevealed={showAns}>
            {showAns === false ? (
                <QuestionContainer>
                    <QuestionText>{question}</QuestionText>
                </QuestionContainer>
            ) : (
                <AnswerContainer>
                    <AnswerText>{answer}</AnswerText>
                </AnswerContainer>
            )}
        </MainContainer>
    );
};

export default DrawerComponent;
