import React from 'react';
import styled from 'styled-components';
import { JsxEmit } from 'typescript';
import { deviceMax, deviceMin } from '../../devices/breakpoints';

//Styles:

const ButtonContainer = styled.button`
    border: 2px solid #fdbc3d;
    padding: 0.7em 1em;
    outline: none;
    color: #fdbc3d;
    background: inherit;
    border-radius: 0.3em;
    box-shadow: rgba(13, 56, 72, 0.3) 0px 19px 40px,
        rgba(13, 56, 72, 0.22) 0px 15px 12px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    @media ${deviceMin.mobileS} {
        padding: 0.6em 0.9em;
    }

    @media ${deviceMin.mobileM} {
        padding: 0.7em 1em;
    }

    @media ${deviceMin.mobileL} {
        padding: 0.7em 1em;
    }
`;

const ButtonText = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 1.5em;
    font-weight: 700;

    @media ${deviceMin.mobileS} {
        font-size: 0.9rem;
    }

    @media ${deviceMin.mobileM} {
        font-size: 1rem;
    }

    @media ${deviceMin.mobileL} {
        font-size: 1.2rem;
    }
`;

const IconContainer = styled.div``;

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
    return (
        <ButtonContainer>
            {buttonIcon && <IconContainer>{buttonIcon}</IconContainer>}
            <ButtonText>{label}</ButtonText>
        </ButtonContainer>
    );
};

export default Button;
