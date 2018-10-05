import React from 'react';
import PropTypes from 'prop-types';

import SelectBox from './selectBox';

import './css/multiSelect.css';

export default class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    const { options } = props

    this.state = {
      options,
    };

    this.selectedOptions = this.selectedOptions.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.selectableOptions = this.selectableOptions.bind(this);
    this.handleUnSelectAll = this.handleUnSelectAll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  selectedOptions(){
    return this.state.options.filter(o => o.selected );
  }

  selectableOptions(){
    return this.state.options.filter(o => !o.selected );
  }

  handleClick(option, selectionType) {
    const { options } = this.state;
    const opt = options.find(obj => { return obj.id === option.id });


    if (selectionType === 'selectable') {
      option.selected = true;
      this.props.onSelect([opt]);
    } else {
      option.selected = false;
      this.props.onDeSelect([opt]);
    }

    this.setState({ options })
  }

  handleSelectAll() {
    const { options } = this.state;
    options.map(o => o.selected = true)
    this.setState({ options })
  }

  handleUnSelectAll() {
    const { options } = this.state;
    options.map(o => o.selected = false)
    this.setState({ options })
  }

  render() {
    const { selectors } = this.props;

    return (
      <div className="ms-container">
        <SelectBox
          type={'selectable'}
          selectors={selectors}
          options={this.selectableOptions()}
          handleClick={this.handleClick}
        />

        <SelectBox
          type={'selected'}
          selectors={selectors}
          options={this.selectedOptions()}
          handleClick={this.handleClick}
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
  options: PropTypes.array.isRequired,
};

MultiSelect.defaultProps = {
  onSelect: () => {},
  onDeSelect: () => {},
  selectors: {id: 'id', label: 'label'}
}
