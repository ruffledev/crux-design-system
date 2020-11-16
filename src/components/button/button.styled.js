import React from 'react'
import styled, { css } from 'styled-components'

// const fontSize = (sizeValue = 16) => {
//     return `
//         font-size: ${sizeValue / 16}px;
//         font-size: ${sizeValue}rem;
//     `
//   }

export const ButtonStyled = styled.button`
    font-size: ${({theme}) => theme.fontSize.body};
    line-height: ${({theme}) => theme.lineHeight.body};
    padding: 14px 12px;
    min-width: 125px;
    border: none;
    cursor: pointer;
    outline: none;

    &:disabled {
        color: ${({theme}) => theme.colors.secondary};
        background: ${({theme}) => theme.colors.inactive};
        cursor: not-allowed;
    }

    /* The GitHub button is a primary button
    * edit this to target it specifically! */
    ${props => props.kind === 'primary' && css`
        background: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.white};
    `}

    ${props => props.kind === 'secondary' && css`
        background: ${({theme}) => theme.colors.secondary};
        color: ${({theme}) => theme.colors.dark};
    `}

    ${props => props.size === 'small' && css`
        padding: 8px 10px;
    `}
`