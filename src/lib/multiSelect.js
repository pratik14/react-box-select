import React from 'react';
import PropTypes from 'prop-types';

import SelectBox from './selectBox';
import { toggleObject } from './utils';

import './css/multiSelect.css';

export default class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    const { selectedOptions, selectableOptions } = props
    this.state = {
      selectedOptions: selectedOptions,
      selectableOptions: selectableOptions,
      allOptions: [...selectedOptions, ...selectableOptions],
    };


    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleUnSelectAll = this.handleUnSelectAll.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { selectedOptions, selectableOptions } = nextProps
    this.setState({ selectedOptions, selectableOptions });
  }

  handleOptionClick(option, selectionType) {
    const { selectors } = this.props
    const { selectedOptions, selectableOptions } = this.state;
    const selectableList = toggleObject(selectableOptions, selectors.id, option);
    const selectedList = toggleObject(selectedOptions, selectors.id, option);

    this.setState({
      selectableOptions: selectableList,
      selectedOptions: selectedList,
    });

    if (selectionType === 'selectable') {
      this.props.onSelect([option]);
    } else {
      this.props.onDeSelect([option]);
    }
  }

  handleSelectAll() {
    const { allOptions, selectableOptions } = this.state;

    this.setState({
      selectableOptions: [],
      selectedOptions: allOptions,
    });
    this.props.onSelect(selectableOptions);
  }

  handleUnSelectAll() {
    const { allOptions, selectedOptions } = this.state;
    this.setState({
      selectedOptions: [],
      selectableOptions: allOptions,
    });
    this.props.onDeSelect(selectedOptions);
  }

  render() {
    return (
      <div className="ms-container">
        <SelectBox
          type={'selectable'}
          selectors={this.props.selectors}
          options={this.state.selectableOptions}
          handleOptionClick={this.handleOptionClick}
        />

        <SelectBox
          type={'selected'}
          selectors={this.props.selectors}
          options={this.state.selectedOptions}
          handleOptionClick={this.handleOptionClick}
        />

        <div className="action">
          <span onClick={this.handleSelectAll}>Select All</span>/
          <span onClick={this.handleUnSelectAll}>UnSelect All</span>
        </div>
      </div>
    );
  }
}

MultiSelect.propTypes = {
  onSelect: PropTypes.func,
  onDeSelect: PropTypes.func,
  selectors: PropTypes.object,
  selectedOptions: PropTypes.array.isRequired,
  selectableOptions: PropTypes.array.isRequired,
};

MultiSelect.defaultProps = {
  onSelect: () => {},
  onDeSelect: () => {},
  selectors: {id: 'id', label: 'label'}
}
