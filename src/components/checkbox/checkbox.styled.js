import React from 'react';
import styled, { css } from 'styled-components';

export const CheckboxStyled = styled.div`
  position: relative;
  width: 100%;
    
  input[type='checkbox'] {
    position: absolute;
    left: -9999px;

    &:checked + label:before {
      background: ${({theme}) => theme.colors.primary};
      border-color: ${({theme}) => theme.colors.primary};
    }

    &:checked + label:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 9px;
      background: ${({theme}) => theme.colors.white};
      width: 2px;
      height: 2px;
      box-shadow: 
        2px 0 0 ${({theme}) => theme.colors.white},
        4px 0 0 ${({theme}) => theme.colors.white},
        4px -2px 0 ${({theme}) => theme.colors.white},
        4px -4px 0 ${({theme}) => theme.colors.white},
        4px -6px 0 ${({theme}) => theme.colors.white},
        4px -8px 0 ${({theme}) => theme.colors.white};
      transform: rotate(45deg);
    }
  }

  label {
    display: flex;
    position: relative;
    cursor: pointer;
    padding: 0;
    font-size: ${({theme}) => theme.fontSize.body};
    line-height: ${({theme}) => theme.lineHeight.body};
    align-items: center;

    &:before {
      content: '';
      margin-right: 12px;
      display: inline-block;
      vertical-align: center;
      width: 18px;
      height: 18px;
      border: 1px solid ${({theme}) => theme.colors.inactive};
      border-radius: 4px;
    }
  }
`;