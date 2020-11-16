import PropTypes from 'prop-types';
import React from 'react';
import { theme } from '../../global/styles/theme';
import { ThemeProvider } from 'styled-components';

class ThemeWrapper extends React.Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        {this.props.children}
      </ThemeProvider>
      )
  }
}

ThemeWrapper.PropTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
}

ThemeWrapper.defaultProps = {
  theme: theme,
};

export default ThemeWrapper;
