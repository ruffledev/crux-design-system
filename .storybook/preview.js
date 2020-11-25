import { addDecorator } from '@storybook/react';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import { defaultTheme } from '../src/global/styles/theme';

addDecorator((storyFn) => (
    <ThemeProvider theme={defaultTheme}>
        <div>{storyFn()}</div>
    </ThemeProvider>
));
