import React from 'react';
import PropTypes from 'prop-types';
import { sortArray } from './utils'

export default class SelectBox extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      options: props.options,
    };

    this.renderList = this.renderList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ options: nextProps.options });
  }

  handleClick(clickedOption) {
    this.props.handleOptionClick(clickedOption, this.props.type);
  }

  renderList() {
    const { id, label } = this.props.selectors;
    let { type, options } = this.props;
    options = sortArray(options, label);

    return (
      options.map(option => (
        <li
          key={option[id]}
          className={`ms-elem-${type}`}
          onClick={() => this.handleClick(option)}
        >
          {option[label]}
        </li>
      ))
    );
  }

  render() {
    return (
      <div className={`ms-${this.props.type}`}>
        <ul className="ms-list">
          { this.renderList()}
        </ul>
      </div>
    );
  }
}

SelectBox.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleOptionClick: PropTypes.func.isRequired,
};
