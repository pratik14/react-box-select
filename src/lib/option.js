import React from 'react';
import PropTypes from 'prop-types';

export default class Option extends React.PureComponent {
  render() {
    const {
      option, text, type, handleClick,
    } = this.props;

    return (
      <li
        role="button"
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
  }).isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
