/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';

export default class Option extends React.PureComponent {
  render() {
    const {
      option, text, type, handleClick,
    } = this.props;

    if (option.disabled) {
      return <li className={`ms-elem-${type} disabled`}>{text}</li>;
    }

    return (
      <li
        role="button"
        tabIndex="-1"
        onKeyUp={() => undefined}
        className={`ms-elem-${type}`}
        onClick={() => handleClick(option)}
      >
        {text}
        {' '}
      </li>
    );
  }
}

Option.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
  }).isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
