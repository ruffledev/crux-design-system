import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import { defaultTheme } from '../../global/styles/theme';
import { ThemeProvider } from 'styled-components';

let combinedTheme = defaultTheme;

const ThemeWrapper = ({children, theme}) => {
  const [combinedTheme, setCombinedTheme] = useState(defaultTheme);

  useEffect(() => {
    if (theme) {
      const c = {...defaultTheme, ...theme};
      setCombinedTheme(c);
    }
  }, [theme]);

  return (
    <ThemeProvider theme={combinedTheme}>
      {children}
    </ThemeProvider>
  )
};

export default ThemeWrapper
