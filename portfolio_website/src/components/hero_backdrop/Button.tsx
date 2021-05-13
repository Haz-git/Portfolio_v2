import React from 'react';
import styled from 'styled-components';
import { JsxEmit } from 'typescript';
import { deviceMax, deviceMin } from '../../devices/breakpoints';

//Styles:

const ButtonContainer = styled.button`
    border: none;
    padding: 0.7em 1em;
    outline: none;
    color: inherit;
    background: #fdbc3d;
    font-family: 'Lato', sans-serif;
    font-size: 1.5em;
    border-radius: 0.3em;
    font-weight: 700;
    box-shadow: rgba(13, 56, 72, 0.3) 0px 19px 40px,
        rgba(13, 56, 72, 0.22) 0px 15px 12px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    @media ${deviceMin.mobileS} {
        padding: 0.6em 0.9em;
        font-size: 0.9em;
    }

    @media ${deviceMin.mobileM} {
        padding: 0.7em 1em;
        font-size: 1em;
    }

    @media ${deviceMin.mobileL} {
        padding: 0.7em 1em;
        font-size: 1.2em;
    }
`;

//Interface:
interface ButtonProps {
    label?: string;
    isLink?: boolean;
    onClick?: Function;
    buttonIcon?: JSX.Element;
}

const Button = ({
    label,
    isLink,
    onClick,
    buttonIcon,
}: ButtonProps): JSX.Element => {
    return <ButtonContainer>Connect with me!</ButtonContainer>;
};

export default Button;
