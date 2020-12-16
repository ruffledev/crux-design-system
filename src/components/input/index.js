import PropTypes from 'prop-types';
import React from 'react';
import { InputStyled } from './input.styled';

class Input extends React.Component {
    render() {
        return (
            <InputStyled {...this.props} />
        )
    }
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

Input.defaultProps = {
    disabled: false,
    invalid: false,
    type: 'text'
}

export default Input
