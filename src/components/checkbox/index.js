import PropTypes from 'prop-types';
import React from 'react';
import { CheckboxStyled } from './checkbox.styled';

class Checkbox extends React.Component {
  render() {
    return (
      <CheckboxStyled>
        <input type="checkbox" {...this.props} />
        <label for={this.props.id}>{this.props.label}</label>
      </CheckboxStyled>
    )
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool
}

Checkbox.defaultProps = {
  disabled: false,
}

export default Checkbox
