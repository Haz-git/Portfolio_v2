import React from 'react';
import styled from 'styled-components';

//Styles:
const MainContainer = styled.div``;

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
