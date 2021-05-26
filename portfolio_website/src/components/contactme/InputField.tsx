import React from 'react';
import styled from 'styled-components';

//Components:
const MainContainer = styled.div``;

const TextInput = styled.input`
    width: 100%;
    padding: 0.5em 1em;
    border-radius: 0.3em;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 1px;
    box-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
    background: #1b222a;
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1em;
`;

//Styles:

//Render:

const InputField = () => {
    return (
        <MainContainer>
            <TextInput />
        </MainContainer>
    );
};

export default InputField;
