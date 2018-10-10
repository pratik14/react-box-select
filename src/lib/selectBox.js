import React from 'react';
import PropTypes from 'prop-types';

import { sortArray } from './utils';
import Option from './option';

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOptionClick(clickedOption) {
    const { handleClick, type } = this.props;
    handleClick(clickedOption, type);
  }

  renderList() {
    let { options } = this.props;
    const { type, selectors } = this.props;
    const { id, label } = selectors;

    options = sortArray(options, label);

    return options.map(option => (
      <Option
        type={type}
        option={option}
        key={option[id]}
        text={option[label]}
        handleClick={() => this.handleOptionClick(option)}
      />
    ));
  }

  render() {
    const { type } = this.props;
    return (
      <div className={`ms-${type}`}>
        <ul className="ms-list">{this.renderList()}</ul>
      </div>
    );
  }
}

SelectBox.propTypes = {
  selectors: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleClick: PropTypes.func.isRequired,
};
