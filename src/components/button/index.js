import PropTypes from 'prop-types';
import React from 'react';
import { ButtonStyled } from './button.styled';

class Button extends React.Component {
  render() {
    return (
      <ButtonStyled
        {...this.props}>
          {this.props.children}
      </ButtonStyled>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  kind: PropTypes.string,
  size: PropTypes.string
}

Button.defaultProps = {
  disabled: false,
  kind: 'primary',
  size: 'default',
};

export default Button
