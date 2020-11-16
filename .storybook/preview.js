import { addDecorator } from '@storybook/react';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import { theme } from '../src/global/styles/theme';

addDecorator((storyFn) => (
    <ThemeProvider theme={theme}>
        <div>{storyFn()}</div>
    </ThemeProvider>
));
