import React from 'react';
import styled from 'styled-components';

//Components:
const MainContainer = styled.div``;

const TextInput = styled.input<InputFieldProps>`
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
    border: ${(InputFieldProps) =>
        InputFieldProps.inputValueError === false
            ? '1px solid #1b222a'
            : '1px solid red'};

    transition: all 0.2s ease-in-out;
`;

//Styles:

//Render:
interface InputFieldProps {
    type?: string;
    onUserChange?: React.ChangeEventHandler;
    inputValue?: string;
    inputValueError?: boolean;
}

const InputField = ({
    type,
    onUserChange,
    inputValue,
    inputValueError,
}: InputFieldProps): JSX.Element => {
    return (
        <MainContainer>
            <TextInput
                type={type}
                onChange={onUserChange}
                value={inputValue}
                inputValueError={inputValueError}
            />
        </MainContainer>
    );
};

export default InputField;
