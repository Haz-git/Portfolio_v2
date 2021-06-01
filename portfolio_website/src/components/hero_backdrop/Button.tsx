import React from 'react';
import styled from 'styled-components';
import { deviceMax, deviceMin } from '../../devices/breakpoints';

//Styles:

const ButtonContainer = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: ${(props) =>
        props.disabled
            ? '1px solid rgba(255,255,255,0.8)'
            : '1px solid #fdbc3d'};
    padding: 0.7em 1em;
    outline: none;
    color: ${(props) =>
        props.disabled ? 'rgba(255,255,255,0.8)' : props.btnTextColor};
    background: ${(props) =>
        props.disabled ? '#1b222a' : props.btnBackground};
    border-radius: 0.3em;
    box-shadow: rgba(13, 56, 72, 0.3) 0px 4px 40px,
        rgba(13, 56, 72, 0.22) 0px 4px 12px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: all 0.2s ease-in-out;
    width: 100%;

    &:hover {
        transform: ${(props) => (props.disabled ? 'none' : 'scale(1.05)')};
    }

    @media ${deviceMin.mobileS} {
        padding: 0.7em 0.9em;
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

const IconContainer = styled.div`
    margin-right: 0.5rem;
`;

//Interface:
interface ButtonProps {
    label?: string;
    isLink?: boolean;
    onClick?: React.MouseEventHandler;
    buttonIcon?: JSX.Element;
    btnBackground?: string;
    btnTextColor?: string;
    isDisabled?: boolean;
    onDisabledText?: string;
}

const Button = ({
    label,
    isLink,
    onClick,
    buttonIcon,
    btnBackground,
    btnTextColor,
    isDisabled,
    onDisabledText,
}: ButtonProps): JSX.Element => {
    return (
        <ButtonContainer
            btnBackground={btnBackground}
            btnTextColor={btnTextColor}
            onClick={onClick}
            disabled={isDisabled}
        >
            {buttonIcon && <IconContainer>{buttonIcon}</IconContainer>}
            {isDisabled === false ? (
                <ButtonText>{label}</ButtonText>
            ) : (
                <ButtonText>{onDisabledText}</ButtonText>
            )}
        </ButtonContainer>
    );
};

export default Button;
