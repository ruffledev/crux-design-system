import React from 'react';
import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
    font-size: ${({theme}) => theme.fontSize.small};
    line-height: ${({theme}) => theme.lineHeight.small};
    padding: 10px 12px;
    border: 1px solid ${({theme}) => theme.colors.inactive};
    color: ${({theme}) => theme.colors.text_secondary};
    outline: none;
    border-radius: 4px;
    min-width: 125px;

    ::placeholder {
        color: ${({theme}) => theme.colors.text_secondary};
    }

    &:focus,
    &:active {
        border-color: ${({theme}) => theme.colors.primary};
    }

    ${props => props.invalid && css`
        background-color:  ${({theme}) => theme.colors.warning};
        border-color: ${({theme}) => theme.colors.error};
        color: ${({theme}) => theme.colors.error};

        ::placeholder {
            color: ${({theme}) => theme.colors.error};
        }
    `}

    &:disabled {
        background-color:  ${({theme}) => theme.colors.inactive};
        border-color: ${({theme}) => theme.colors.text_secondary};

        ::placeholder {
            color: ${({theme}) => theme.colors.text_secondary};
        }
    }   
`;