/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';

import SelectBox from './selectBox';

import './css/multiSelect.css';

export default class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    const { options } = props;

    this.state = {
      options,
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderToggleAll = this.renderToggleAll.bind(this);
    this.selectedOptions = this.selectedOptions.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.selectableOptions = this.selectableOptions.bind(this);
    this.handleUnSelectAll = this.handleUnSelectAll.bind(this);
  }

  selectedOptions() {
    const { options } = this.state;
    return options.filter(o => o.selected);
  }

  selectableOptions() {
    const { options } = this.state;
    return options.filter(o => !o.selected);
  }

  handleClick(option, selectionType) {
    const { options } = this.state;
    const { onSelect, onDeSelect } = this.props;
    const opt = options.find(obj => obj.id === option.id);

    if (selectionType === 'selectable') {
      opt.selected = true;
      onSelect(opt);
    } else {
      opt.selected = false;
      onDeSelect(opt);
    }

    this.setState({ options });
  }

  handleSelectAll() {
    const { options } = this.state;
    options.forEach((o) => {
      o.selected = true;
    });
    this.setState({ options });
  }

  handleUnSelectAll() {
    const { options } = this.state;
    options.forEach((o) => {
      o.selected = false;
    });
    this.setState({ options });
  }

  renderToggleAll() {
    const { showSelectAllBtn } = this.props;
    if (!showSelectAllBtn) {
      return <div />;
    }

    return (
      <div className="action">
        <a href onClick={this.handleSelectAll}>
          {' '}
          Select All
          {' '}
        </a>
        /
        <a href onClick={this.handleUnSelectAll}>
          UnSelect All
        </a>
      </div>
    );
  }

  render() {
    const { selectors } = this.props;

    return (
      <div className="ms-container">
        {' '}
        {this.renderToggleAll()}
        <SelectBox
          type="selectable"
          selectors={selectors}
          options={this.selectableOptions()}
          handleClick={this.handleClick}
        />
        <SelectBox
          type="selected"
          selectors={selectors}
          options={this.selectedOptions()}
          handleClick={this.handleClick}
        />
        {' '}
      </div>
    );
  }
}

MultiSelect.propTypes = {
  onSelect: PropTypes.func,
  onDeSelect: PropTypes.func,
  selectors: PropTypes.shape({ id: PropTypes.string, label: PropTypes.string }),
  showSelectAllBtn: PropTypes.bool,
  options: PropTypes.arrayOf().isRequired,
};

MultiSelect.defaultProps = {
  onSelect: () => {},
  onDeSelect: () => {},
  showSelectAllBtn: false,
  selectors: {
    id: 'id',
    label: 'label',
  },
};
