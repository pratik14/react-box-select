import React from 'react';
import PropTypes from 'prop-types';

import { sortArray } from './utils'
import Option from './option'

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
    this.props.handleClick(clickedOption, this.props.type);
  }

  renderList() {
    const { id, label } = this.props.selectors;
    let { type, options } = this.props;
    options = sortArray(options, label);

    return (
      options.map(option => (
        <Option
          type={type}
          option={option}
          key={option[id]}
          text={option[label]}
          handleClick={() => this.handleClick(option)}
        />
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
  handleClick: PropTypes.func.isRequired,
};
