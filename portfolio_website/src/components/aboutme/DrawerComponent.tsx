import React from 'react';
import styled from 'styled-components';

//Styles:
const MainContainer = styled.div`
    background: #1b222a;
    padding: 1em 1em;
    border-radius: 0.5em;
`;

const QuestionContainer = styled.div``;

const QuestionText = styled.p``;

const AnswerContainer = styled.div`
    display: none;
`;

const AnswerText = styled.p``;

//Interface:
type drawerProps = {
    question: string;
    answer: string;
};

const DrawerComponent = ({ question, answer }: drawerProps): JSX.Element => {
    return (
        <MainContainer>
            <QuestionContainer>
                <QuestionText>{question}</QuestionText>
            </QuestionContainer>
            <AnswerContainer>
                <AnswerText>{answer}</AnswerText>
            </AnswerContainer>
        </MainContainer>
    );
};

export default DrawerComponent;
