import PropTypes from 'prop-types';
import React from 'react'
import './button.scss'

class Button extends React.Component {
  render() {
    return <button className={`btn btn-${this.props.kind} btn-${this.props.size}`} disabled={this.props.disabled}>{this.props.children}</button>
  }
}

Button.PropTypes = {
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
